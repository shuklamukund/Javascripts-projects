document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progressBar");
    const progressFill = document.getElementById("progressFill");

    // Function to calculate and update the progress bar
    function updateProgressBar() {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Event listener to update the progress bar on scroll
    window.addEventListener("scroll", updateProgressBar);
});