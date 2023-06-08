function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
      document.getElementById("login-message").innerHTML = "Please enter both email and password.";
    } else {
      // Perform login logic here
      document.getElementById("login-message").innerHTML = "Logging in...";
    }
  }

  function register() {
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;

    if (email === "" || password === "") {
      document.getElementById("register-message").innerHTML = "Please enter both email and password.";
    } else {
      // Perform registration logic here
      document.getElementById("register-message").innerHTML = "Registering...";
    }
  }