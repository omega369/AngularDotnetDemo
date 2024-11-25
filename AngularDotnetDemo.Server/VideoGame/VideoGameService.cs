using Microsoft.EntityFrameworkCore;

namespace AngularDotnetDemo.Server.VideoGame
{
    public class VideoGameService : IVideoGameService
    {
        private readonly VideoGameContext _db;

        public VideoGameService(VideoGameContext db)
        {
            _db = db;
        }

        public async Task<List<VideoGame>> GetVideoGamesAsync()
        {
            return await _db.VideoGames.ToListAsync();
        }

        public async Task<VideoGame?> GetVideoGameAsync(int id)
        {
            return await _db.VideoGames.FindAsync(id);
        }

        public async Task<bool> UpdateVideoGameAsync(int id, VideoGame updatedVideoGame)
        {
            var existingVideoGame = await _db.VideoGames.FindAsync(id);
            if (existingVideoGame == null) return false;

            existingVideoGame.Title = updatedVideoGame.Title;
            existingVideoGame.Genre = updatedVideoGame.Genre;
            existingVideoGame.Platform = updatedVideoGame.Platform;

            await _db.SaveChangesAsync();
            return true;
        }
    }
}
