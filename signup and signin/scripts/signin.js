// Get references to the HTML elements we need to interact with
const emailOrPhoneInput = document.getElementsByName('emailOrPhone')[0];
const passwordInput = document.getElementsByName('password')[0];
const signInButton = document.getElementById('signIn');

// Check if the user's email or phone number is already in local storage
function userExists(emailOrPhone) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === emailOrPhone || user.phone === emailOrPhone);
}

function handleSignIn(event) {
  event.preventDefault();
  const emailOrPhone = emailOrPhoneInput.value;
  const password = passwordInput.value;

  // Check if both fields are filled
  if (!emailOrPhone || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Check if the user exists in local storage
  if (userExists(emailOrPhone)) {
    const user = JSON.parse(localStorage.getItem('users')).find(user => user.email === emailOrPhone || user.phone === emailOrPhone);
    // If the user exists, check their password
    if (user.password === password) {
      alert('Welcome back!'+' '+user.name);
      window.location.href = 'index.html';
    } else {
      const changePassword = confirm('Incorrect password. Would you like to change your password?');
      if (changePassword) {
        // Redirect the user to the change password page
        localStorage.setItem('changePasswordUser', emailOrPhone);
        window.location.href = 'changepassword.html';
      }
    }
  } else {
    alert('Email or phone number not found. Please sign up for an account.');
    // Redirect to the sign up page
    window.location.href = 'signup.html';
  }
}


function closeModal() {
  var modal = document.getElementById("signInModal");
  modal.style.display = "none";
}

// Attach event listener to the sign in button
signInButton.addEventListener('click', handleSignIn);
