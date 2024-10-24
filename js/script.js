document.addEventListener('DOMContentLoaded', function () {
    const stone = document.querySelector('.stone');

    // Wait for 3 seconds, then slowly change the stone image to the pointers image
    setTimeout(() => {
        stone.style.opacity = '0'; // Start fading out the stone
        setTimeout(() => {
            stone.style.backgroundImage = "url('../img/pointers.jpg')"; // Change to the pointers image
            stone.style.opacity = '1'; // Fade in the new image
        }, 1500); // Wait for the fade out to complete (1.5s)
    }, 3000); // Wait 3 seconds after page load
});
