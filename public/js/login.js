const loginFormHandler = async (event) => {
  event.preventDefault();

 
  //const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
   
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("login-form").addEventListener('click', loginFormHandler);

document.getElementById('signup-form').addEventListener('click', signupFormHandler);
