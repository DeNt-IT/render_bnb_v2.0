using System.ComponentModel.DataAnnotations;

namespace Render_BnB_v2.Models.DTOs
{
    public class CreditCardDto
    {
        [Required]
        [StringLength(20)]
        public string CardNumber { get; set; }

        [Required]
        [StringLength(5)]
        public string Expiry { get; set; }

        [Required]
        [StringLength(4)]
        public string CVV { get; set; }

        [StringLength(20)]
        public string PostalCode { get; set; }

        [StringLength(50)]
        public string Country { get; set; }
    }
}
