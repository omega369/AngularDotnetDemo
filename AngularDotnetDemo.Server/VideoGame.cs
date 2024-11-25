using System.ComponentModel.DataAnnotations;

namespace AngularDotnetDemo.Server
{
    public class VideoGame
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public string Platform { get; set; }
    }
}
