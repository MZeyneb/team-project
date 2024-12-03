document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
        const userData = JSON.parse(storedUserData); //  burada saxlanilmis melumat string formatindadir. Json.parse yaziriqki  stringi obyekt formatina cevrilsin

      
        if (userData.email === email && userData.password === password) {  // burada eger daxil olunmus sifre ve email eynidirse lS daki ile giris ugurlu olur ve biz index.html sehifesine gedr
        
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password!');
        }
    } else {
        alert('No registered users found.');
    }
});
