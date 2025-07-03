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
    public class CardController : ControllerBase
    {
        private readonly ICreditCardService _cardService;
        private readonly ICurrentUserService _currentUser;

        public CardController(ICreditCardService cardService, ICurrentUserService currentUser)
        {
            _cardService = cardService;
            _currentUser = currentUser;
        }

        [HttpGet]
        public async Task<IActionResult> GetCard()
        {
            var userId = _currentUser.GetCurrentUserId();
            if (userId == null) return Unauthorized();

            var card = await _cardService.GetCardAsync(userId.Value);
            if (card == null) return NotFound();
            return Ok(card);
        }

        [HttpPost]
        public async Task<IActionResult> SaveCard([FromBody] CreditCardDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userId = _currentUser.GetCurrentUserId();
            if (userId == null) return Unauthorized();

            var card = await _cardService.SaveCardAsync(userId.Value, dto);
            return Ok(card);
        }
    }
}
