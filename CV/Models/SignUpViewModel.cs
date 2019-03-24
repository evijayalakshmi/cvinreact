namespace cv.Models {

    public class SignUpViewModel {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
    }

    public class SecurityCodeViewModel {
        public string Email { get; set; }
        public int Code { get; set; }
    }
}