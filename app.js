document.addEventListener('DOMContentLoaded', () => {

    function updateBackground() {
        const currentHour = new Date().getHours();
        const isDay = currentHour >= 6 && currentHour < 18;
        document.body.classList.toggle('day-mode', isDay);
        document.body.classList.toggle('night-mode', !isDay);
    }

    // Call updateBackground on page load
    updateBackground();

})
