document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });

        document.getElementById('utcTime').textContent = utcTime;
        document.getElementById('dayOfWeek').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);  // Update time every second
});
