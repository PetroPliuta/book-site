// $(window).on("load", function () {
$(document).ready(function () {
    // const stone = $('.stone')[0];
    const drevne = $('#drevne')[0];
    const staro = $('#staro')[0];

    $('#start-btn').on('click', function () {
        $(this).fadeOut(); // Hide the button with a fade-out effect
        $('#overlay').fadeOut(); // Remove the dim overlay
        $('.container').css('opacity', '1'); // Restore full opacity to main content

        drevne.play(); // Play the sound

        // Example: Change background image after 3 seconds
        setTimeout(function () {

            $('.stone').fadeOut(1000, function () { // Fade out current background
                $(this).css('background-image', `url('img/three_pointers.jpg')`); // Change the background image
                $(this).fadeIn(1000); // Fade in new background

                staro.play();
            });
        }, 3000); // Delay for demonstration
    });
});
