document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        console.log("data",name,email,password);
        const response = await fetch('http://192.168.81.91:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_TOKEN_HERE'
            },
            body: JSON.stringify({ name, email, password }),
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('Registration successful');
            window.location.href = 'login.html';
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
