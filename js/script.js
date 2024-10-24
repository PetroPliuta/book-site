document.addEventListener('DOMContentLoaded', function () {
    const stone = document.querySelector('.stone');

    // Wait for 3 seconds, then transform the stone into three pointers
    setTimeout(() => {
        stone.style.backgroundImage = "url('./img/pointers.jpg')"; // Update the image to the pointers
    }, 3000);

    // Add future code here for additional interactions like robot transformation, etc.
});
