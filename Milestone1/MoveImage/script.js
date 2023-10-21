document.addEventListener("DOMContentLoaded", function() {
    const movingImage = document.getElementById("movingImage");
    let posX = 0;
    let posY = 0;
    const step = 10; // Adjust the step size to control the speed of movement

    // Function to update the image position
    function updatePosition() {
        movingImage.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    // Event listener to detect arrow key presses
    document.addEventListener("keydown", function(event) {
        const key = event.key;

        switch (key) {
            case "ArrowUp":
                posY -= step;
                break;
            case "ArrowDown":
                posY += step;
                break;
            case "ArrowLeft":
                posX -= step;
                break;
            case "ArrowRight":
                posX += step;
                break;
            default:
                return; // If any other key is pressed, do nothing
        }

        updatePosition();
    });
});