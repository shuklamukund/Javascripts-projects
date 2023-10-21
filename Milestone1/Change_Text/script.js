const headingElement = document.getElementById('text');
    const toggleButton = document.getElementById('btn');

    // Create an array with the two different text contents
    const textOptions = [
      "The most affordable learning platform",
      "PW Skills"
    ];

    // Variable to keep track of the current text option index
    let currentTextIndex = 0;

    // Function to toggle the text content of the heading
    const toggleHeadingText = () => {
      currentTextIndex = (currentTextIndex + 1) % textOptions.length;
      headingElement.textContent = textOptions[currentTextIndex];
    };

    // Add a click event listener to the button to call the toggleHeadingText function on each click
    toggleButton.addEventListener('click', toggleHeadingText);