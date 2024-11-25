using AngularDotnetDemo.Server;
using AngularDotnetDemo.Server.VideoGame;
using Microsoft.EntityFrameworkCore;

namespace AngularDotnetDemo.Test
{
    [TestClass]
    public class VideoGameServiceTests
    {
        private VideoGameContext _context;

        [TestInitialize]
        public async Task TestInitialize()
        {
            var options = new DbContextOptionsBuilder<VideoGameContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            var context = new VideoGameContext(options);
            // Seed initial data
            if (!await context.VideoGames.AnyAsync())
            {
                context.VideoGames.AddRange(new List<VideoGame>
                {
                    new VideoGame { Id = 1, Title = "Game 1", Genre = "Action", Platform = "PC" },
                    new VideoGame { Id = 2, Title = "Game 2", Genre = "RPG", Platform = "Console" },
                });
                await context.SaveChangesAsync();
            }

            _context = context;
        }

        [TestCleanup]
        public void TestCleanup()
        {
            _context.Dispose();
        }

        [TestMethod]
        public async Task GetVideoGamesAsync_ShouldReturnAllGames()
        {
            var service = new VideoGameService(_context);
            var result = await service.GetVideoGamesAsync();

            Assert.AreEqual(2, result.Count());
        }

        [TestMethod]
        public async Task UpdateVideoGameAsync_ShouldUpdateGame()
        {
            var service = new VideoGameService(_context);
            var updatedGame = new VideoGame { Id = 1, Title = "Game 3", Genre = "Adventure", Platform = "Mobile" };

            await service.UpdateVideoGameAsync(1, updatedGame);

            var games = await _context.VideoGames.ToListAsync();
            Assert.AreEqual(2, games.Count);
            Assert.AreEqual("Game 3", games.First(g => g.Id == 1).Title);
        }
    }
}
