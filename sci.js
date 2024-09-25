document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to server

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    // Clear previous errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Please include '@' in the email";
        isValid = false;
    }

    // Username validation
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        isValid = false;
    }

    // Password validation (must contain at least one capital letter and one special character)
    const passwordPattern = /(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must contain at least one capital letter and one special character";
        isValid = false;
    }

    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome, ' + username + '!',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect or refresh the page
                window.location.reload();
            }
        });
    }
});