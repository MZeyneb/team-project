// document.getElementById('loginForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); 
    
    

//     const subbtn = document.querySelector("#loginForm")
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();

  
//     const response = await axios('http://localhost:3000/users')
//       subbtn.addEventListener("submit", ()=>{
//         drawusers(response.data)
//       })
//       const logining = await axios.patch('http://localhost:3000/users')
//       logining.data.islogged = true;
        

//       async function drawusers(arr){
//         arr.forEach(element => {
//           if (element.email === email && element.password === password) { 
//             window.location.replace('index.html')
//           }
//         });
//       }
    
    

// });


// document.addEventListener("DOMContentLoaded", function () {
//     const eyeIcon = document.querySelector(".eye-icon");  // Göz ikonunu seçirik
//     const passInput = document.querySelector("#password");  // Şifrə inputunu seçirik
  
//     eyeIcon.addEventListener("click", function () {
//       // Əgər göz ikonu "gizlət" (fa-eye-slash) vəziyyətindədirsə, göstərməyə keçiririk
//       if (this.classList.contains("fa-eye-slash")) {
//         this.classList.remove("fa-eye-slash");  // "fa-eye-slash" sinfini silirik
//         this.classList.add("fa-eye");  // "fa-eye" sinfini əlavə edirik
//         passInput.type = "text";  // Şifrəni göstəririk
//       } else {
//         // Əgər göz ikonu "göstər" (fa-eye) vəziyyətindədirsə, gizlətməyə keçiririk
//         this.classList.add("fa-eye-slash");  // "fa-eye-slash" sinfini əlavə edirik
//         this.classList.remove("fa-eye");  // "fa-eye" sinfini silirik
//         passInput.type = "password";  // Şifrəni gizlədirik
//       }
//     });
//   });
  
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

 
  const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.email === email && userData.password === password) {
        userData.islogged = true;
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = 'index.html';
    } else {
        alert('Wrong email and password');
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

