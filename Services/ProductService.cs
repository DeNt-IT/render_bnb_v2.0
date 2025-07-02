// Services/ProductService.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Render_BnB_v2.Data;
using Render_BnB_v2.Models;
using Render_BnB_v2.Models.DTOs;

namespace Render_BnB_v2.Services
{
    public interface IProductService
    {
        Task<List<ProductDto>> GetAllProductsAsync();
        Task<ProductDto> GetProductByIdAsync(int id);
        Task<ProductDto> CreateProductAsync(CreateProductDto productDto);
        Task<ProductDto> UpdateProductAsync(int id, UpdateProductDto productDto);
        Task<bool> DeleteProductAsync(int id);
        Task<List<ProductDto>> GetProductsByDestinationAsync(string destination);
        Task<List<string>> GetDestinationsAsync();
        Task<List<Comment>> GetCommentsAsync(int productId);
        Task<Comment> AddCommentAsync(int productId, string userName, string content);
    }
    
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;
        
        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // Convert byte[] to base64 string
        private string ByteArrayToBase64(byte[] byteArray)
        {
            if (byteArray == null)
                return null;
                
            return Convert.ToBase64String(byteArray);
        }
        
        // Convert base64 string to byte[]
        private byte[] Base64ToByteArray(string base64String)
        {
            if (string.IsNullOrEmpty(base64String))
                return null;
                
            // Remove "data:image/xxx;base64," if present
            if (base64String.Contains(","))
            {
                base64String = base64String.Split(',')[1];
            }
                
            return Convert.FromBase64String(base64String);
        }
        
        // Map Product to ProductDto
        private ProductDto MapToDto(Product product)
        {
            return new ProductDto
            {
                Id = product.Id,
                ImageBase64 = product.Image != null ? $"data:image/jpeg;base64,{ByteArrayToBase64(product.Image)}" : null,
                Name = product.Name,
                PhotoBase64 = product.Photos?.Select(ph => $"data:image/jpeg;base64,{ByteArrayToBase64(ph.Image)}").ToList(),
                Location = product.Location,
                Rating = product.Rating,
                Description = product.Description,
                Days = product.Days,
                Price = product.Price,
                Tag = product.Tag
            };
        }
        
        public async Task<List<ProductDto>> GetAllProductsAsync()
        {
            var products = await _context.Products
                .Include(p => p.Photos)
                .ToListAsync();
            return products.Select(MapToDto).ToList();
        }
        
        public async Task<ProductDto> GetProductByIdAsync(int id)
        {
            var product = await _context.Products
                .Include(p => p.Photos)
                .Include(p => p.Comments)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (product == null)
                return null;

            return MapToDto(product);
        }
        
        public async Task<ProductDto> CreateProductAsync(CreateProductDto productDto)
        {
            var product = new Product
            {
                Image = Base64ToByteArray(productDto.ImageBase64),
                Name = productDto.Name,
                Location = productDto.Location,
                Rating = productDto.Rating,
                Description = productDto.Description,
                Days = productDto.Days,
                Price = productDto.Price,
                Tag = productDto.Tag,
                CreatedAt = DateTime.UtcNow
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            if (productDto.PhotoBase64 != null)
            {
                foreach (var base64 in productDto.PhotoBase64)
                {
                    var photo = new Photo
                    {
                        ProductId = product.Id,
                        Image = Base64ToByteArray(base64)
                    };
                    _context.Photos.Add(photo);
                }
                await _context.SaveChangesAsync();
            }

            // Reload with photos
            var created = await _context.Products
                .Include(p => p.Photos)
                .FirstOrDefaultAsync(p => p.Id == product.Id);
            return MapToDto(created);
        }
        
        public async Task<ProductDto> UpdateProductAsync(int id, UpdateProductDto productDto)
        {
            var product = await _context.Products
                .Include(p => p.Photos)
                .FirstOrDefaultAsync(p => p.Id == id);
            if (product == null)
                return null;
                
            // Update only if image is provided
            if (!string.IsNullOrEmpty(productDto.ImageBase64))
            {
                product.Image = Base64ToByteArray(productDto.ImageBase64);
            }

            if (productDto.PhotoBase64 != null)
            {
                // Remove existing photos and add new ones
                _context.Photos.RemoveRange(product.Photos);
                foreach (var base64 in productDto.PhotoBase64)
                {
                    product.Photos.Add(new Photo
                    {
                        ProductId = product.Id,
                        Image = Base64ToByteArray(base64)
                    });
                }
            }

            product.Name = productDto.Name;
            product.Location = productDto.Location;
            product.Rating = productDto.Rating;
            product.Description = productDto.Description;
            product.Days = productDto.Days;
            product.Price = productDto.Price;
            product.Tag = productDto.Tag;
            
            await _context.SaveChangesAsync();
            
            return MapToDto(product);
        }
        
        public async Task<bool> DeleteProductAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
                return false;
                
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<List<ProductDto>> GetProductsByDestinationAsync(string destination)
        {
            if (string.IsNullOrWhiteSpace(destination))
            {
                return await GetAllProductsAsync();
            }

            var lower = destination.ToLower();
            var products = await _context.Products
                .Include(p => p.Photos)
                .Where(p => p.Location.ToLower().Contains(lower))
                .ToListAsync();

            return products.Select(MapToDto).ToList();
        }

        public async Task<List<string>> GetDestinationsAsync()
        {
            return await _context.Products
                .Select(p => p.Location)
                .Distinct()
                .ToListAsync();
        }

        public async Task<List<Comment>> GetCommentsAsync(int productId)
        {
            return await _context.Comments
                .Where(c => c.ProductId == productId)
                .OrderByDescending(c => c.CreatedAt)
                .ToListAsync();
        }

        public async Task<Comment> AddCommentAsync(int productId, string userName, string content)
        {
            var comment = new Comment
            {
                ProductId = productId,
                UserName = userName,
                Content = content,
                CreatedAt = DateTime.UtcNow
            };

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return comment;
        }
    }
}