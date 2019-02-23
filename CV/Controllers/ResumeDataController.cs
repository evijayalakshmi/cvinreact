using cv.Models;
using cv.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace cv.Controllers
{
    [Route("api/[controller]")]
    public class ResumeDataController : Controller
    {
        private readonly IResumeStoreService _resumeStoreService;

        public ResumeDataController(IResumeStoreService resumeStoreService)
        {
            _resumeStoreService = resumeStoreService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("[action]")]
        public ActionResult<ResumeData> SaveToMongoDB([FromBody] ResumeData request)
        {
            var req = request;
            var utcTime = DateTime.UtcNow;
            req.Name = string.Format("{0} {1}", "Resume", utcTime);
            req.CreatedTime = utcTime;

            _resumeStoreService.Create(request);

            //return OkObjectResult(insertedResume);
            return CreatedAtRoute("GetResume", new { id = request.Id.ToString() }, request);
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<ResumeData>> GetByEmailId([FromQuery] string emailId) {
            return Ok(_resumeStoreService.TryGetByUser(emailId));
        }
    }
}