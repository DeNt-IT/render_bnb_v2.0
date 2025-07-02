using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Render_BnB_v2.Models
{
    public class Photo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public byte[] Image { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
