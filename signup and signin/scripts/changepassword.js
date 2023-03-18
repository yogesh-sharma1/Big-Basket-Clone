  // Get references to the HTML elements we need to interact with
  const newPasswordInput = document.getElementById('newPassword');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const changePasswordButton = document.getElementById('changePassword');

  // Handle form submission for changing the password
  function handleChangePassword(event) {
      event.preventDefault();
      const newPassword = newPasswordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      // Check that the new password and confirm password match
      if (newPassword !== confirmPassword) {
          alert('New password and confirm password do not match. Please try again.');
          return;
      }

      // Retrieve the user's email or phone number from local storage
      const emailOrPhone = localStorage.getItem('changePasswordUser');

      // Retrieve the list of users from local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Find the user with the matching email or phone number and update their password
      const matchedUser = users.find(user => user.email === emailOrPhone || user.phone === emailOrPhone);
      if (matchedUser) {
          matchedUser.password = newPassword;

          // Save the updated list of users to local storage
          localStorage.setItem('users', JSON.stringify(users));
      // Redirect the user to the login page
      alert('Your password has been changed,you will be redirected shortly ');
      window.location.href = 'signin.html';
  } else {
      alert('User not found. Please try again.');
  }
}
// Add an event listener to the change password button
changePasswordButton.addEventListener('click', handleChangePassword);

// Get the modal element and its close button
const changePasswordModal = document.getElementById('changePasswordModal');
const close = document.querySelector('.close');

// Open the modal when the page loads
changePasswordModal.style.display = 'block';

// Close the modal when the user clicks on the close button or anywhere outside of the modal
window.onclick = function(event) {
  if (event.target == changePasswordModal || event.target == close) {
      changePasswordModal.style.display = 'none';
  }
};