document.addEventListener('DOMContentLoaded', function () {
    const stone = document.querySelector('.stone');

    setTimeout(() => {
        stone.style.backgroundImage = "url('./img/pointers.jpg')"; // Change to the pointers image
    }, 1500); // Wait for the fade out to complete (1.5s)
});
