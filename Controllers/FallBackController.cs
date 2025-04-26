// Controllers/FallbackController.cs
using Microsoft.AspNetCore.Mvc;

namespace Render_BnB_v2.Controllers
{
    public class FallbackController : Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), 
                "render-bnb", "build", "index.html"), "text/HTML");
        }
    }
}