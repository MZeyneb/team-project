document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get user input from the form fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get the user data stored in localStorage
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Check if the entered email and password match
        if (userData.email === email && userData.password === password) {
            // Credentials are correct, redirect to main.html
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password!');
        }
    } else {
        alert('No registered users found.');
    }
});
