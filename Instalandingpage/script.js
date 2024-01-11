function login() {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Add your login logic here (this is just a basic example)
    if (username === 'demo' && password === 'demo') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
