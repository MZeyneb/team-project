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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    let profileImage = null;
    if (imagefile) {
        const reader = new FileReader();
        reader.onloadend = async function () {
            profileImage = reader.result;
            await submitRegistration(profileImage); // Proceed with the registration after the image is read
        };
        reader.readAsDataURL(imagefile);
    } else {
        await submitRegistration(null); // Proceed with the registration without the image
    }

    async function submitRegistration(profileImage) {
        const userData = {
            name: fullname,
            email: email,
            password: password,
            profileImage: profileImage,
            createdAt: new Date().toISOString(),
            linkedinUrl: "",
            experienceYear: 0,
            bio: "",
            skills: []
        };

        // Make the POST request to register the user
        const response = await axios.post('http://localhost:3000/users', userData);
        console.log('Response:', response); // Log the response to see if it's successful

        if (response.status === 201) {
            window.location.replace("login.html"); // Redirect after successful registration
        } else {
            alert('Error during registration. Please try again.');
        }
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
