namespace AngularDotnetDemo.Server.VideoGame
{
    public interface IVideoGameService
    {
        Task<List<VideoGame>> GetVideoGamesAsync();
        Task<VideoGame?> GetVideoGameAsync(int id);
        Task<bool> UpdateVideoGameAsync(int id, VideoGame videoGame);
    }
}
