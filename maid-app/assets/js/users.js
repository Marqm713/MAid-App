document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;
    
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
    
            const data = await response.json();
            alert(data.message || 'Registration complete');
    
            registerForm.reset();
            document.getElementById('reg-username').focus();
        });
    } 

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
    
            try {
                const response = await fetch('http://localhost:3000/api/users/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
    
                const data = await response.json();
    
                if (!response.ok) {
                    alert(data.error || 'Login failed');
                    return;
                }
    
                alert(data.message || 'Login successful');
                loginForm.reset();
    
                if (data.message === 'Login successful') {
                    console.log('✅ Logged in');
                    window.location.href = 'dashboard.html'; // redirect here
                }
                
    
            } catch (err) {
                alert('An error occurred. Please try again.');
                console.error(err);
            }
        });
    }
});
