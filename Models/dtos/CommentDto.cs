using System.ComponentModel.DataAnnotations;

namespace Render_BnB_v2.Models.DTOs
{
    public class CommentDto
    {
        [Required]
        [StringLength(100)]
        public string UserName { get; set; }

        [Required]
        [StringLength(500)]
        public string Content { get; set; }
    }
}
