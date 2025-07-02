// Controllers/ProductsController.cs
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Render_BnB_v2.Models.DTOs;
using Render_BnB_v2.Services;

namespace Render_BnB_v2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }
        
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpGet("search")]
        public async Task<IActionResult> GetProductsByDestination([FromQuery] string destination)
        {
            var products = await _productService.GetProductsByDestinationAsync(destination);
            return Ok(products);
        }

        [HttpGet("destinations")]
        public async Task<IActionResult> GetDestinations()
        {
            var destinations = await _productService.GetDestinationsAsync();
            return Ok(destinations);
        }
        
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);
            
            if (product == null)
                return NotFound($"Product with ID {id} not found");
                
            return Ok(product);
        }
        
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductDto productDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var result = await _productService.CreateProductAsync(productDto);
            return CreatedAtAction(nameof(GetProductById), new { id = result.Id }, result);
        }
        
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] UpdateProductDto productDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var result = await _productService.UpdateProductAsync(id, productDto);
            
            if (result == null)
                return NotFound($"Product with ID {id} not found");
                
            return Ok(result);
        }
        
        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var result = await _productService.DeleteProductAsync(id);
            
            if (!result)
                return NotFound($"Product with ID {id} not found");
                
            return NoContent();
        }
    }
}