using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace stocksharp.Controllers
{
    public class TickController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // GET: /<controller>/
        //public string Index()
        //{
        //    return "This is my default action...";
        //}

        // 
        // GET: /HelloWorld/Welcome/ 

        public IActionResult Welcome(string name, int numTimes = 1)
        {
            ViewData["Message"] = "Hello " + name;
            ViewData["NumTimes"] = numTimes;

            return View();
        }
        //https://localhost:5001/tick/welcome?name=LS&numtimes=23

        public IActionResult Stock(string ticker = "AAPL")
        {
            ViewData["Foobar"] = "Hello " + ticker;
            return View();
        }


    }
}


