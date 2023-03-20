 // Get references to the HTML elements we need to interact with
 const nameInput = document.getElementById('name');
 const emailOrPhoneInput = document.getElementById('emailOrPhone');
 const passwordInput = document.getElementById('password');
 const signUpButton = document.getElementById('signUp');

 // Check if the user's email or phone number is already in local storage
 function userExists(emailOrPhone) {
   const users = JSON.parse(localStorage.getItem('users')) || [];
   return users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone);
 }

 // Sign up the user and save their information to local storage
 function signUp(name, emailOrPhone, password) {
   const users = JSON.parse(localStorage.getItem('users')) || [];
   users.push({ name, email: emailOrPhone, phone: emailOrPhone, password });
   localStorage.setItem('users', JSON.stringify(users));
 }

// Handle form submission for signing up
// Handle form submission for signing up
function handleSignUp(event) {
  event.preventDefault();
  const name = nameInput.value;
  const emailOrPhone = emailOrPhoneInput.value;
  const password = passwordInput.value;

  // Check if any field is empty
  if (!name || !emailOrPhone || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    alert('Password should be 8 characters or more');
    return;
  }

  // Check if the user already exists in local storage
  if (userExists(emailOrPhone)) {
    alert('An account with that email or phone number already exists. Please sign in or use a different email or phone number.');
  } else {
    // If the user doesn't exist, sign them up and save their information to local storage
    signUp(name, emailOrPhone, password);
    alert('Welcome! Your account has been created.');
    window.location.href = 'signin.html';
  }
}



 // Attach event listener to the sign up button
 signUpButton.addEventListener('click', handleSignUp);