function highlightWordsGreaterThan8Characters() {
    const paragraph = document.getElementById('para');
    const words = paragraph.textContent.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim();

        if (word.length > 8) {
            words[i] = `<span style="background-color: yellow;">${word}</span>`;
        }
    }

    paragraph.innerHTML = words.join(' ');
}

// Call the function to highlight the words
highlightWordsGreaterThan8Characters();