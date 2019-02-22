using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cv.DataAccess;
using cv.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet("[action]")]
        public ActionResult<IReadOnlyCollection<User>> GetAllUsers() {
            return Ok(_context.Users);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(string id, User user) {
            if (id != user.Email) {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id) {
            var user = await _context.Users.FindAsync(id);

            if (user == null) {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}