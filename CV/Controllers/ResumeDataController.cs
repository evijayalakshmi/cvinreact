using cv.Models;
using cv.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace cv.Controllers {

    [Route("api/[controller]")]
    public class ResumeDataController : Controller {
        private readonly IResumeStoreService _resumeStoreService;

        public ResumeDataController(IResumeStoreService resumeStoreService) {
            _resumeStoreService = resumeStoreService;
        }

        public IActionResult Index() {
            return View();
        }

        [HttpPost("[action]")]
        public ActionResult<ResumeData> SaveToMongoDB([FromBody] ResumeData request) {
            var req = request;
            var utcTime = DateTime.UtcNow;
            req.Name = string.Format("{0} {1}", "Resume", utcTime);
            req.CreatedTime = utcTime;
            req.UpdatedTime = utcTime;

            return Ok(_resumeStoreService.Create(request));
        }

        [HttpGet("[action]")]
        public ActionResult<ResumeData> Get([FromQuery] string id) {
            var res = _resumeStoreService.Get(id);

            if (res == null) {
                return NotFound();
            }
            return Ok(res);
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<ResumeData>> GetByEmailId([FromQuery] string emailId) {
            return Ok(_resumeStoreService.TryGetByUser(emailId));
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult DeleteById(string id) {
            var book = _resumeStoreService.Get(id);

            if (book == null) {
                return NotFound();
            }

            _resumeStoreService.Remove(book.Id);

            return NoContent();
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, [FromBody] ResumeData resume) {
            var res = _resumeStoreService.Get(id);

            if (res == null) {
                return NotFound();
            }

            var utcTime = DateTime.UtcNow;
            resume.Name = string.Format("{0} {1}", "Resume", utcTime);
            resume.UpdatedTime = utcTime;
            _resumeStoreService.Update(id, resume);

            return NoContent();
        }
    }
}