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
        private readonly ICurrentUserService _currentUser;

        public ProfileController(IProfileService profileService, ICurrentUserService currentUserService)
        {
            _profileService = profileService;
            _currentUser = currentUserService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProfile()
        {
            var profile = await _currentUser.GetCurrentProfileAsync();
            if (profile == null)
                return NotFound();
            return Ok(profile);
        }

        [HttpPost]
        public async Task<IActionResult> SaveProfile([FromBody] UpdateProfileDto dto)
        {
            var userId = _currentUser.GetCurrentUserId();
            if (userId == null)
                return Unauthorized();

            var profile = await _profileService.SaveProfileAsync(userId.Value, dto);
            return Ok(profile);
        }
    }
}
