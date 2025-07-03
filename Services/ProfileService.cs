// Services/ProfileService.cs
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Render_BnB_v2.Data;
using Render_BnB_v2.Models;
using Render_BnB_v2.Models.DTOs;

namespace Render_BnB_v2.Services
{
    public interface IProfileService
    {
        Task<ProfileDto> GetProfileAsync(int userId);
        Task<ProfileDto> SaveProfileAsync(int userId, UpdateProfileDto dto);
    }

    public class ProfileService : IProfileService
    {
        private readonly ApplicationDbContext _context;

        public ProfileService(ApplicationDbContext context)
        {
            _context = context;
        }

        private string ByteArrayToBase64(byte[] byteArray)
        {
            if (byteArray == null)
                return null;

            return Convert.ToBase64String(byteArray);
        }

        private byte[] Base64ToByteArray(string base64String)
        {
            if (string.IsNullOrEmpty(base64String))
                return null;
            if (base64String.Contains(","))
            {
                base64String = base64String.Split(',')[1];
            }
            return Convert.FromBase64String(base64String);
        }

        private ProfileDto MapToDto(Profile profile)
        {
            return new ProfileDto
            {
                Id = profile.Id,
                ProfilePictureBase64 = profile.ProfilePicture != null ? $"data:image/jpeg;base64,{ByteArrayToBase64(profile.ProfilePicture)}" : null,
                DisplayName = profile.DisplayName ?? "User",
                University = profile.University,
                LivingPlace = profile.LivingPlace,
                BirthDecade = profile.BirthDecade,
                Interest = profile.Interest,
                Skill = profile.Skill,
                TimeSpent = profile.TimeSpent,
                Job = profile.Job,
                Languages = profile.Languages,
                FavoriteSong = profile.FavoriteSong,
                FunFact = profile.FunFact,
                BioHeadline = profile.BioHeadline,
                Pets = profile.Pets
            };
        }

        public async Task<ProfileDto> GetProfileAsync(int userId)
        {
            var profile = await _context.Profiles.FirstOrDefaultAsync(p => p.UserId == userId);
            if (profile == null)
                return null;
            return MapToDto(profile);
        }

        public async Task<ProfileDto> SaveProfileAsync(int userId, UpdateProfileDto dto)
        {
            var profile = await _context.Profiles.FirstOrDefaultAsync(p => p.UserId == userId);
            if (profile == null)
            {
                profile = new Profile { UserId = userId };
                _context.Profiles.Add(profile);
            }

            if (!string.IsNullOrEmpty(dto.ProfilePictureBase64))
            {
                profile.ProfilePicture = Base64ToByteArray(dto.ProfilePictureBase64);
            }

            if (dto.DisplayName != null)
            {
                profile.DisplayName = dto.DisplayName;
            }
            else if (profile.DisplayName == null)
            {
                profile.DisplayName = "User";
            }
            profile.University = dto.University;
            profile.LivingPlace = dto.LivingPlace;
            profile.BirthDecade = dto.BirthDecade;
            profile.Interest = dto.Interest;
            profile.Skill = dto.Skill;
            profile.TimeSpent = dto.TimeSpent;
            profile.Job = dto.Job;
            profile.Languages = dto.Languages;
            profile.FavoriteSong = dto.FavoriteSong;
            profile.FunFact = dto.FunFact;
            profile.BioHeadline = dto.BioHeadline;
            profile.Pets = dto.Pets;
            profile.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return MapToDto(profile);
        }
    }
}
