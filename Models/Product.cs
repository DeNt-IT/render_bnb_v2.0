// Models/Product.cs
using System;
using System.ComponentModel.DataAnnotations;

namespace Render_BnB_v2.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public byte[] Image { get; set; }
        
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
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}