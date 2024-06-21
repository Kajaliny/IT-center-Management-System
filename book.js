document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const computerId = document.getElementById('computerId').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    
    try {
        const response = await fetch('http://192.168.81.91:5000/api/computers/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ computerId, startTime, endTime }),
        });
        const data = await response.json();
        if (response.ok) {
            alert('Booking successful');
            window.location.href = 'dashboard.html';
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
