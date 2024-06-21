document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
    }

    try {
        const response = await fetch('http://192.168.81.91:5000/api/computers', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const computers = await response.json();
        const computerList = document.getElementById('computerList');
        computerList.innerHTML = computers.map(computer => `<li>${computer.location} - ${computer.status}</li>`).join('');
    } catch (error) {
        console.error('Error:', error);
    }
});
