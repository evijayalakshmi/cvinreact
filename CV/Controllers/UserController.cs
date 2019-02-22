using System;
using System.Linq;
using cv.DataAccess;
using cv.Models;
using Microsoft.AspNetCore.Mvc;

namespace cv.Controllers {

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase {
        private readonly UserContext _context;

        public UserController(UserContext context) {
            _context = context;
        }

        [HttpPost("[action]")]
        public ActionResult<bool> RegisterUser([FromBody] SignUpViewModel userInfo) {
            _context.Users.Add(new User {
                Name = userInfo.Name,
                Email = userInfo.Email,
                Password = userInfo.Password,
                CreatedTime = DateTime.UtcNow,
                IsAdmin = userInfo.IsAdmin
            });
            return Ok(_context.SaveChanges() > 0);
        }

        [HttpPost("[action]")]
        public ActionResult<User> ValidateUser([FromBody] LoginViewModel userInfo) {
            var user = _context.Users.ToList().Find(u => u.Email == userInfo.Email && u.Password == userInfo.Password);
            if (user == null) {
                return NotFound();
            }
            return Ok(user);
        }
    }
}