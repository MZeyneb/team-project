document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
        const userData = JSON.parse(storedUserData); //  burada saxlanilmis melumat string formatindadir. Json.parse yaziriqki  stringi obyekt formatina cevrilsin

      
        if (userData.email === email && userData.password === password) {  // burada eger daxil olunmus sifre ve email eynidirse lS daki ile giris ugurlu olur ve biz index.html sehifesine gedr
          window.location.replace('index.html')
        } else {
            alert('Invalid email or password!');
        }
    } else {
        alert('No registered users found.');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const eyeIcon = document.querySelector(".eye-icon");  // Göz ikonunu seçirik
    const passInput = document.querySelector("#password");  // Şifrə inputunu seçirik
  
    eyeIcon.addEventListener("click", function () {
      // Əgər göz ikonu "gizlət" (fa-eye-slash) vəziyyətindədirsə, göstərməyə keçiririk
      if (this.classList.contains("fa-eye-slash")) {
        this.classList.remove("fa-eye-slash");  // "fa-eye-slash" sinfini silirik
        this.classList.add("fa-eye");  // "fa-eye" sinfini əlavə edirik
        passInput.type = "text";  // Şifrəni göstəririk
      } else {
        // Əgər göz ikonu "göstər" (fa-eye) vəziyyətindədirsə, gizlətməyə keçiririk
        this.classList.add("fa-eye-slash");  // "fa-eye-slash" sinfini əlavə edirik
        this.classList.remove("fa-eye");  // "fa-eye" sinfini silirik
        passInput.type = "password";  // Şifrəni gizlədirik
      }
    });
  });
  
