const cart = ["item1", "item2", "item1", "item3", "item2", "item4", "item5", "item5"];

    function removeDuplicates() {
      // Use a Set to store unique items
      const uniqueItemsSet = new Set(cart);

      // Convert the Set back to an array
      const uniqueItemsArray = Array.from(uniqueItemsSet);

      // Display the result
      const cartElement = document.getElementById("cart");
      cartElement.textContent = `Cart after removing duplicates: [${uniqueItemsArray.join(", ")}]`;
    }