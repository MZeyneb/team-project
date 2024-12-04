document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        
        if (userData.email === email && userData.password === password) {
          
            window.location.href = 'index.html';
        } else {
            alert('Wrong email and password');
        }
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
  