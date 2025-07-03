using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Render_BnB_v2.Data;
using Render_BnB_v2.Models;
using Render_BnB_v2.Models.DTOs;

namespace Render_BnB_v2.Services
{
    public interface ICreditCardService
    {
        Task<CreditCard?> GetCardAsync(int userId);
        Task<CreditCard> SaveCardAsync(int userId, CreditCardDto dto);
    }

    public class CreditCardService : ICreditCardService
    {
        private readonly ApplicationDbContext _context;

        public CreditCardService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<CreditCard?> GetCardAsync(int userId)
        {
            return await _context.CreditCards.FirstOrDefaultAsync(c => c.UserId == userId);
        }

        public async Task<CreditCard> SaveCardAsync(int userId, CreditCardDto dto)
        {
            var card = await _context.CreditCards.FirstOrDefaultAsync(c => c.UserId == userId);
            if (card == null)
            {
                card = new CreditCard { UserId = userId };
                _context.CreditCards.Add(card);
            }

            card.CardNumber = dto.CardNumber;
            card.Expiry = dto.Expiry;
            card.CVV = dto.CVV;
            card.PostalCode = dto.PostalCode;
            card.Country = dto.Country;

            await _context.SaveChangesAsync();
            return card;
        }
    }
}
