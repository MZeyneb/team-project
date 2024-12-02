document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const imagefile = document.getElementById("imagefile").files[0]; // Get the first file

    let imageURL = "";
    if (imagefile) {
      const reader = new FileReader();
      reader.onloadend = function () {
        imageURL = reader.result;

        // Prepare the user data object
        const userData = {
          fullname: fullname,
          email: email,
          password: password,
          profileImage: imageURL,
        };

        // Store user data in localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Redirect to login page
        window.location.href = "login.html";
      };
      reader.readAsDataURL(imagefile);
    } else {
      const userData = {
        fullname: fullname,
        email: email,
        password: password,
        profileImage: null,
      };

      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(userData));

      // Redirect to login page
      window.location.href = "login.html";
    }
  });
