document.addEventListener('DOMContentLoaded', function () {
    const stone = document.querySelector('.stone');
    const voices = document.querySelectorAll('.voice');
    const robot = document.querySelector('.transform-robot');

    // Click on the 'ancient' or 'old' voices to transform the stone into the robot with panels
    voices.forEach(voice => {
        voice.addEventListener('click', () => {
            stone.style.transform = 'scale(0)'; // shrink the stone
            setTimeout(() => {
                stone.classList.add('hidden'); // hide stone
                robot.classList.remove('hidden'); // reveal robot
            }, 2000); // wait for the stone shrink animation to finish
        });
    });
    
    // Add future code here to handle book panel click events
});
