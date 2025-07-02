namespace Render_BnB_v2.Models.DTOs
{
    public class ProfileDto
    {
        public int Id { get; set; }
        public string ProfilePictureBase64 { get; set; }
        public string DisplayName { get; set; }
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
    }

    public class UpdateProfileDto
    {
        public string ProfilePictureBase64 { get; set; }
        public string DisplayName { get; set; }
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
    }
}
