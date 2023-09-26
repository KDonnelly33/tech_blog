const handleLogin = async (event) => {
event.preventDefault();
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

const response = await fetch('/api/user/login', {
  method: 'POST',
  body: JSON.stringify({ email, password }),
  headers: { 'Content-Type': 'application/json' },
});
if (response.ok) {
  document.location.replace('/dashboard');
} else {
    alert("Login failed")
}
}
document
.querySelector('#login-form')
.addEventListener('submit', handleLogin);
