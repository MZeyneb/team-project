document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formanın normal şəkildə göndərilməsinin qarşısını alırıq

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const imagefile = document.getElementById('imagefile').files[0];

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
