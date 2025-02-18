document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password") {
        alert('Hello world!')
    } else {
        alert('Invalid credentials');
    }
});

document.querySelector('.footer a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('The username is admin and the password is password');
    document.getElementById('username').value = "admin";
    document.getElementById('password').value = "password";
});