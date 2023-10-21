   // Array to store cart items
   let cart = [];

   // Function to add an item to the cart
   function addItemToCart() {
     const unitPriceInput = document.getElementById('unitPrice');
     const quantityInput = document.getElementById('quantity');
     
     const unitPrice = parseFloat(unitPriceInput.value);
     const quantity = parseInt(quantityInput.value);

     if (isNaN(unitPrice) || isNaN(quantity) || unitPrice <= 0 || quantity <= 0) {
       alert('Please enter valid unit price and quantity.');
       return;
     }

     const item = { unitPrice, quantity };
     cart.push(item);

     // Clear the input fields after adding an item
     unitPriceInput.value = '';
     quantityInput.value = '';

     displayCartItems();
   }

   // Function to calculate the total cost of items in the cart
   function calculateTotalCost() {
     let totalCost = 0;
     for (const item of cart) {
       totalCost += item.unitPrice * item.quantity;
     }

     const totalCostDisplay = document.getElementById('totalCost');
     totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
   }

   // Function to display the cart items
   function displayCartItems() {
     const cartItemsDiv = document.getElementById('cartItems');
     cartItemsDiv.innerHTML = '';

     for (const item of cart) {
       const itemInfo = document.createElement('p');
       itemInfo.textContent = `Unit Price: $${item.unitPrice.toFixed(2)} | Quantity: ${item.quantity}`;
       cartItemsDiv.appendChild(itemInfo);
     }
   }
