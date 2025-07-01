using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Render_BnB_v2.Models
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        public byte[] ProfilePicture { get; set; }
        public string University { get; set; }
        public string LivingPlace { get; set; }
        public string BirthDecade { get; set; }
        public string Interest { get; set; }
        public string Skill { get; set; }
        public string TimeSpent { get; set; }
        public string Job { get; set; }
        public string Languages { get; set; }
        public string FavoriteSong { get; set; }
        public string FunFact { get; set; }
        public string BioHeadline { get; set; }
        public string Pets { get; set; }
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
