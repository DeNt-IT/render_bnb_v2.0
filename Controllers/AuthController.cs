// Controllers/AuthController.cs
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Render_BnB_v2.Models.DTOs;
using Render_BnB_v2.Services;

namespace Render_BnB_v2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var result = await _authService.RegisterAsync(registerDto);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var result = await _authService.LoginAsync(loginDto);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }
    }
}