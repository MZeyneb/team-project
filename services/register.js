document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
  
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const imagefile = document.getElementById('imagefile').files[0];
    const fullnameRegex = /^[A-Za-z\s]+$/; 
    
    if (!fullnameRegex.test(fullname)) {
        alert("Full name must contain only letters and spaces");
        return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }
  
    // Validate Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; 
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    let userData = {
        name: fullname,
        email: email,
        password: password,
        profileImage: null,
        createdAt: new Date().toISOString(),
        experienceYear: 0, 
        linkedinUrl: "", 
        bio: "", 
        skills: [] 
    };
  
    if (imagefile) {
        const reader = new FileReader();
        reader.onloadend = async function () {
            userData.profileImage = reader.result;
            await submitRegistration(userData);
        };
        reader.readAsDataURL(imagefile);
    } else {
        await submitRegistration(userData);
    }
  });
  
  
  async function submitRegistration(userData) {
      try {
          const response = await axios.post('http://localhost:3000/users', userData);
          if (response.status === 201) {
              alert('Registration successful!');
              localStorage.setItem("userData", JSON.stringify(userData));  
              window.location.replace('login.html')
          } else {
              alert('Error during registration. Please try again.');
          }
      } catch (error) {
          console.error('Error adding user:', error);
          alert('Registration failed. Please try again.');
      }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const eyeIcon = document.querySelector(".eye-icon"); // Select the eye icon
    const passInput = document.querySelector("#password"); // Select the password input field

    // Ensure the eye icon exists before attaching event listener
    if (eyeIcon && passInput) {
        eyeIcon.addEventListener("click", function () {
            if (this.classList.contains("fa-eye-slash")) {
                this.classList.remove("fa-eye-slash"); // Change to "eye" icon
                this.classList.add("fa-eye");
                passInput.type = "text"; // Show password
            } else {
                this.classList.add("fa-eye-slash"); // Change to "eye-slash" icon
                this.classList.remove("fa-eye");
                passInput.type = "password"; // Hide password
            }
        });
    }
});