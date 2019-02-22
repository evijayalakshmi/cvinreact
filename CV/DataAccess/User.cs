using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace cv.DataAccess
{
    [Table("user-details")]
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        [Key]
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedTime { get; set; }

        public bool IsAdmin { get; set; }
    }
}
