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
    } else {
        alert('Heç bir qeydiyyatlı istifadəçi tapılmadı.');
    }
});
