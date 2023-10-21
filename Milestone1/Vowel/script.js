
  function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i])) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  function checkCount() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    const result = countVowels(name);
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The number of vowels in the name is: ${result}`;
  }
  
