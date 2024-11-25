using Microsoft.EntityFrameworkCore;

namespace AngularDotnetDemo.Server.VideoGame
{
    public class VideoGameContext : DbContext
    {
        public VideoGameContext(DbContextOptions<VideoGameContext> options) : base(options) { }
        public DbSet<VideoGame> VideoGames { get; set; }

        // Seeding the database with initial data
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VideoGame>().HasData(
                new VideoGame { Id = 1, Title = "The Witcher 3", Genre = "RPG", Platform = "PC" },
                new VideoGame { Id = 2, Title = "God of War", Genre = "Action", Platform = "PS4" },
                new VideoGame { Id = 3, Title = "Minecraft", Genre = "Sandbox", Platform = "PC" }
            );
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            Seed(modelBuilder);
        }
    }
}
