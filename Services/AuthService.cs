// Services/AuthService.cs
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Render_BnB_v2.Data;
using Render_BnB_v2.Models;
using Render_BnB_v2.Models.DTOs;
using System.Security.Cryptography;

namespace Render_BnB_v2.Services
{
    public interface IAuthService
    {
        Task<AuthResponseDto> RegisterAsync(RegisterDto registerDto);
        Task<AuthResponseDto> LoginAsync(LoginDto loginDto);
    }
    
    public class AuthService : IAuthService
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        
        public AuthService(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        
        public async Task<AuthResponseDto> RegisterAsync(RegisterDto registerDto)
        {
            // Check if user already exists
            if (await _context.Users.AnyAsync(u => u.Login == registerDto.Login))
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Message = "Username already exists"
                };
            }
            
            if (await _context.Users.AnyAsync(u => u.Email == registerDto.Email))
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Message = "Email already exists"
                };
            }
            
            // Create new user
            var user = new User
            {
                Login = registerDto.Login,
                Email = registerDto.Email,
                PasswordHash = HashPassword(registerDto.Password)
            };
            
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            
            // Generate token
            var token = GenerateJwtToken(user);
            
            return new AuthResponseDto
            {
                Success = true,
                Message = "Registration successful",
                Token = token,
                UserName = user.Login
            };
        }
        
        public async Task<AuthResponseDto> LoginAsync(LoginDto loginDto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Login == loginDto.Login);
            
            if (user == null || !VerifyPassword(loginDto.Password, user.PasswordHash))
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Message = "Invalid username or password"
                };
            }
            
            // Generate token
            var token = GenerateJwtToken(user);
            
            return new AuthResponseDto
            {
                Success = true,
                Message = "Login successful",
                Token = token,
                UserName = user.Login
            };
        }
        
        private string HashPassword(string password)
        {
            // Generate a secure password hash using BCrypt or similar
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
        
        private bool VerifyPassword(string password, string passwordHash)
        {
            return BCrypt.Net.BCrypt.Verify(password, passwordHash);
        }
        
        private string GenerateJwtToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Login),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);
            
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}