// Models/DTOs/AuthDTOs.cs
namespace Render_BnB_v2.Models.DTOs
{
    public class RegisterDto
    {
        public string Login { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
    
    public class LoginDto
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
    
    public class AuthResponseDto
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public string Token { get; set; }
        public string UserName { get; set; }
    }
}