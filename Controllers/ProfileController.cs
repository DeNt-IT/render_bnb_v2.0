// Controllers/ProfileController.cs
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Render_BnB_v2.Models.DTOs;
using Render_BnB_v2.Services;

namespace Render_BnB_v2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProfile()
        {
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue("sub");
            if (userIdClaim == null)
                return Unauthorized();
            int userId = int.Parse(userIdClaim);

            var profile = await _profileService.GetProfileAsync(userId);
            if (profile == null)
                return NotFound();
            return Ok(profile);
        }

        [HttpPost]
        public async Task<IActionResult> SaveProfile([FromBody] UpdateProfileDto dto)
        {
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue("sub");
            if (userIdClaim == null)
                return Unauthorized();
            int userId = int.Parse(userIdClaim);

            var profile = await _profileService.SaveProfileAsync(userId, dto);
            return Ok(profile);
        }
    }
}
