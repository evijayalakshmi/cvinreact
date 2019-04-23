using cv.DataAccess;
using cv.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace cv.Controllers {

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase {
        private readonly UserContext _context;
        private readonly IMemoryCache _cache;
        private readonly SmtpClient _smtpClient;
        private readonly MemoryCacheEntryOptions _cacheEntryOptions;

        public UserController(UserContext context, SmtpClient smtpClient, IMemoryCache cache) {
            _context = context;
            _cache = cache;
            _smtpClient = smtpClient;

            // Set cache options.
            _cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed.
                    .SetSlidingExpiration(TimeSpan.FromSeconds(300));
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

        [HttpPost("[action]")]
        public ActionResult<User> ChangePassword([FromBody] ChangePasswordViewModel userInfo) {
            var user = _context.Users.ToList().Find(u => u.Email == userInfo.Email && u.Password == userInfo.OldPassword);
            if (user == null) {
                return NotFound();
            } else {
                user.Password = userInfo.NewPassword;
                _context.SaveChanges();
                return Ok(user);
            }
        }

        [HttpPost("[action]")]
        public ActionResult<bool> ValidateSecurityCode([FromBody] SecurityCodeViewModel userInfo) {
            if (_cache.TryGetValue(userInfo.Email, out int cacheEntry)) {
                if (cacheEntry == userInfo.Code) {
                    return Ok("OK");
                } else {
                    return NotFound();
                }
            } else {
                return NotFound();
            }
        }

        //[HttpGet("[action]")]
        //public ActionResult<bool> SendOTPToMail(string email) {
        //    SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
        //    client.UseDefaultCredentials = false;
        //    client.Credentials = new NetworkCredential("username", "password");

        //    MailMessage mailMessage = new MailMessage();
        //    mailMessage.From = new MailAddress("whoever@me.com");
        //    mailMessage.To.Add("receiver@me.com");
        //    mailMessage.Body = "body";
        //    mailMessage.Subject = "subject";
        //    client.Send(mailMessage);
        //}

        [HttpGet("[action]")]
        public async Task<IActionResult> SendOTP(string to) {
            Random rand = new Random();
            var rnd = rand.Next(1000000, 9999999);
            var mailMessage = new MailMessage(
                from: "vijaya.laxmi502-no-reply@gmail.com",
                to: to,
                subject: "Resume Builder App",
                body: "Welcome to Resume Builder App!<br />" +
                      "Your security code is <b>" + rnd + "</b>" +
                      "<hr />" + "This code will expire in <b>5 minutes</b>"
                );
            mailMessage.IsBodyHtml = true;

            // Save data in cache.
            _cache.Set(to, rnd, _cacheEntryOptions);
            //}
            try {
                await _smtpClient.SendMailAsync(mailMessage);
            } catch (Exception e) {
                // TODO: Handle the exception
                Console.Write(e.Message);
            }

            return Ok("OK");

        }
        [HttpPost("[action]")]
        public async Task<IActionResult> SendUserCredentials([FromBody] LoginViewModel userInfo) {
            var mailMessage = new MailMessage(
               from: "vijaya.laxmi502-no-reply@gmail.com",
               to: userInfo.Email,
               subject: "Resume Builder App",
               body: "Welcome to Resume Builder App!<br />" + "<hr />" +
                     "Here is your <b> Login Credentials: </b> <br/>" + "<b> Username: " + userInfo.Email + "</b>" + "<br/>" + "<b> Password: " + userInfo.Password + "</b>"
               );
            mailMessage.IsBodyHtml = true;

            try {
                await _smtpClient.SendMailAsync(mailMessage);
            } catch (Exception e) {
                // TODO: Handle the exception
                Console.Write(e.Message);
            }

            return Ok("OK");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> SendUpdatedPassword([FromBody] LoginViewModel userInfo) {
            var mailMessage = new MailMessage(
               from: "vijaya.laxmi502-no-reply@gmail.com",
               to: userInfo.Email,
               subject: "Resume Builder App",
               body: "Welcome to Resume Builder App!<br />" + "<hr />" +
                     "Here is your, <br/>"
                     + "Updated Password: <b>"  + userInfo.Password + "</b>"
               );
            mailMessage.IsBodyHtml = true;

            try {
                await _smtpClient.SendMailAsync(mailMessage);
            } catch (Exception e) {
                // TODO: Handle the exception
                Console.Write(e.Message);
            }

            return Ok("OK");
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