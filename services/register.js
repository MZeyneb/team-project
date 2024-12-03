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

          try {
              const response = await axios.post('http://localhost:3000/users', userData);
              if (response.status === 201) {
                  alert('Registration successful!');
                  window.location.href = 'companylogin.html';
              } else {
                  alert('Error during registration. Please try again.');
              }
          } catch (error) {
              console.error('Error adding user:', error);
              alert('Registration failed. Please try again.');
          }
      };
      reader.readAsDataURL(imagefile);
  } else {
      const userData = {
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

      try {
          const response = await axios.post('http://localhost:3000/users', userData);
          if (response.status === 201) {
              alert('Registration successful!');
              window.location.href = 'companylogin.html';
          } else {
              alert('Error during registration. Please try again.');
          }
      } catch (error) {
          console.error('Error adding user:', error);
          alert('Registration failed. Please try again.');
      }
  }
});