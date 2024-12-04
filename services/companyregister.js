

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const imagefile = document.getElementById('imagefile').files[0];
    const fullnameRegex = /^[A-Za-z\s]+$/; //yalniz herfler ve bosluqlar

    if (!fullnameRegex.test(fullname))
     {
      alert("Full name most contain only letters and space");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //standart epoct formati

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // sifre minimum 8 simvol,1 boyuk herf, 1 kicik herf ve 1 reqem olmalidir

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    alert('Registration successful!');

    let profileImage = null;
    if (imagefile) {
        const reader = new FileReader();
        reader.onloadend = function () {
            profileImage = reader.result;


            const userData = {
                fullname: fullname,
                email: email,
                password: password,
                profileImage: profileImage
            };

         
            localStorage.setItem('userData', JSON.stringify(userData));

            
            window.location.href = 'companylogin.html';
        };
        reader.readAsDataURL(imagefile);
    } else {
        const userData = {
            fullname: fullname,
            email: email,
            password: password,
            profileImage: null
        };

  
        localStorage.setItem('userData', JSON.stringify(userData));

        
        window.location.href = 'companylogin.html';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const eyeIcon = document.querySelector(".eye-icon"); 
    const passInput = document.querySelector("#password"); 
  
    eyeIcon.addEventListener("click", function () {
     
      if (this.classList.contains("fa-eye-slash")) {
        this.classList.remove("fa-eye-slash"); 
        this.classList.add("fa-eye");  
        passInput.type = "text";  
      } else {
        this.classList.add("fa-eye-slash");  
        this.classList.remove("fa-eye"); 
        passInput.type = "password";  
      }
    });
  });
  