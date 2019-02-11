using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using cv.Services;
using cv.Models;

namespace cv.Controllers
{
    [Route("api/[controller]")]
    public class ResumeDataController : Controller
    {

        private readonly IResumeStoreService _resumeStoreService;

        public ResumeDataController(IResumeStoreService resumeStoreService) {
            _resumeStoreService = resumeStoreService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("[action]")]
        public ActionResult<ResumeData> SaveToMongoDB([FromBody] ResumeData request) {
            var req = request;
            req.Name = string.Format("{0} {1}", "Resume", DateTime.UtcNow.ToString());

            _resumeStoreService.Create(request);

            //return OkObjectResult(insertedResume);
            return CreatedAtRoute("GetResume", new { id = request.Id.ToString() }, request);
        }

    }
}