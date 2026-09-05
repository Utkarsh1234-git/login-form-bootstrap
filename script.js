// SHOW / HIDE PASSWORD

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");

    } else {

        password.type = "password";

        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");

    }

});


// LOGIN FORM VALIDATION

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const passwordValue = document
        .getElementById("password")
        .value
        .trim();

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");


    // Clear previous errors

    emailError.textContent = "";
    passwordError.textContent = "";


    let valid = true;


    // EMAIL VALIDATION

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;
        }
    }


    // PASSWORD VALIDATION

    if (passwordValue === "") {

        passwordError.textContent =
            "Please enter your password.";

        valid = false;

    } else if (passwordValue.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        valid = false;
    }


    // LOGIN SUCCESS

    if (valid) {

        alert("Login Successful!");

        loginForm.reset();

        // Reset password icon

        password.type = "password";

        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");

    }

});