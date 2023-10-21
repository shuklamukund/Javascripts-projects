const learnItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web Development",
    "React",
    "Node.js"
  ];
  
  let currentIndex = 0;
  
  const addButton = document.getElementById('addButton');
  const learnList = document.getElementById('learnList');
  
  const addNextItem = () => {
    if (currentIndex < learnItems.length) {
      const newItem = document.createElement('li');
      newItem.textContent = learnItems[currentIndex];
      learnList.appendChild(newItem);
      currentIndex++;
    } else {
      addButton.disabled = true;
      alert("All items have been added!");
    }
  };
  
  addButton.addEventListener('click', addNextItem);