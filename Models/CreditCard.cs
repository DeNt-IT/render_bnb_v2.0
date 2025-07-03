using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Render_BnB_v2.Models
{
    public class CreditCard
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        [StringLength(20)]
        public string CardNumber { get; set; }

        [StringLength(5)]
        public string Expiry { get; set; }

        [StringLength(4)]
        public string CVV { get; set; }

        [StringLength(20)]
        public string PostalCode { get; set; }

        [StringLength(50)]
        public string Country { get; set; }
    }
}
