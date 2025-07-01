using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Render_BnB_v2.Data;
using Render_BnB_v2.Models.DTOs;

namespace Render_BnB_v2.Services
{
    public interface ICurrentUserService
    {
        int? GetCurrentUserId();
        Task<ProfileDto> GetCurrentProfileAsync();
    }

    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly IProfileService _profileService;

        public CurrentUserService(IHttpContextAccessor accessor, IProfileService profileService)
        {
            _contextAccessor = accessor;
            _profileService = profileService;
        }

        public int? GetCurrentUserId()
        {
            var user = _contextAccessor.HttpContext?.User;
            var idClaim = user?.FindFirstValue(ClaimTypes.NameIdentifier) ?? user?.FindFirstValue("sub");
            if (idClaim == null) return null;
            if (int.TryParse(idClaim, out var id)) return id;
            return null;
        }

        public async Task<ProfileDto> GetCurrentProfileAsync()
        {
            var id = GetCurrentUserId();
            if (id == null) return null;
            return await _profileService.GetProfileAsync(id.Value);
        }
    }
}
