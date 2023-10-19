var passwordCheck = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('password_warning').style.color = 'green';
      document.getElementById('password_warning').innerHTML = 'Your passwords match.';
    } else {
      document.getElementById('password_warning').style.color = 'red';
      document.getElementById('password_warning').innerHTML = '*Your passwords do not match.';
    }
  }
  