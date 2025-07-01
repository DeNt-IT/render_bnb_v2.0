// Models/DTOs/ProductDTOs.cs
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Render_BnB_v2.Models.DTOs
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string ImageBase64 { get; set; } // For frontend display
        public string Location { get; set; }
        public decimal Rating { get; set; }
        public string Description { get; set; }
        public string Days { get; set; }
        public string Price { get; set; }
        public string Tag { get; set; }
    }
    
    public class CreateProductDto
    {
        [Required]
        public string ImageBase64 { get; set; } // Base64 encoded image
        
        [Required]
        [StringLength(100)]
        public string Location { get; set; }
        
        [Required]
        [Range(0, 5)]
        public decimal Rating { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Description { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Days { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Price { get; set; }

        [Required]
        [StringLength(50)]
        public string Tag { get; set; }
    }
    
    public class UpdateProductDto
    {
        public string ImageBase64 { get; set; } // Base64 encoded image, null if not changing
        
        [Required]
        [StringLength(100)]
        public string Location { get; set; }
        
        [Required]
        [Range(0, 5)]
        public decimal Rating { get; set; }
        
        [Required]
        [StringLength(200)]
        public string Description { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Days { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Price { get; set; }

        [Required]
        [StringLength(50)]
        public string Tag { get; set; }
    }
}