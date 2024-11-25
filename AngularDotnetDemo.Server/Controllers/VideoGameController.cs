using Microsoft.AspNetCore.Mvc;

namespace AngularDotnetDemo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoGameController : Controller
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IVideoGameService _videoGameService;

        public VideoGameController(ILogger<WeatherForecastController> logger, IVideoGameService videoGameService)
        {
            _logger = logger;
            _videoGameService = videoGameService;
        }

        [HttpGet(Name = "GetVideoGames")]
        public async Task<ActionResult> Get()
        {
            var videoGames = await _videoGameService.GetVideoGamesAsync();

            return Ok(videoGames);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<VideoGame>> GetVideoGame(int id)
        {
            var videoGame = await _videoGameService.GetVideoGameAsync(id);

            if (videoGame == null)
            {
                return NotFound();
            }

            return videoGame;
        }

        // PUT: api/videogame/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVideoGame(int id, VideoGame videoGame)
        {
            var success = await _videoGameService.UpdateVideoGameAsync(id, videoGame);

            if (!success)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}

