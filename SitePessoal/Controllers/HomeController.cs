using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace SitePessoal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
