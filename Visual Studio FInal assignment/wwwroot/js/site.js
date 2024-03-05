// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Get the video element
var video = document.getElementById('video');

// Function to animate the video
function animateVideo() {
    let position = 0;
    let direction = 1; // 1 for moving right, -1 for moving left

    // Function to update the position of the video
    function updatePosition() {
        // Update the position based on the direction
        position += direction; // Increment or decrement position by 1 pixel

        // Set the new position
        video.style.transform = `translateX(${position}px)`;

        // Check if the video reaches the edges of the page
        const videoRect = video.getBoundingClientRect();
        const pageWidth = window.innerWidth;
        if (videoRect.left <= 0 || videoRect.right >= pageWidth) {
            // Change direction when reaching the edges of the page
            direction *= -1; // Reverse the direction
        }

        // Request next frame for smooth animation
        requestAnimationFrame(updatePosition);
    }

    // Start the animation
    updatePosition();
}

// Start the animation every 2 seconds
setInterval(animateVideo, 2000); // 2000 milliseconds = 2 seconds
