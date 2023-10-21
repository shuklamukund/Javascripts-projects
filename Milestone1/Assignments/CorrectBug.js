function doubleQuantityOfItems(cart) {
    // Create a new array to store the updated cart with doubled quantities
    const updatedCart = [];
  
    // Iterate through the cart array
    for (const item of cart) {
      // Create a new object for the updated item with the doubled quantity
      const updatedItem = { quantity: item.quantity * 2 };
  
      // Push the updated item into the updatedCart array
      updatedCart.push(updatedItem);
    }
  
    // Return the updatedCart array with doubled quantities
    return updatedCart;
  }
  
  // Example cart array
  const cart = [
    {  quantity: 2 },
    {  quantity: 3 },
    {  quantity: 1 },
  ];
  
  // Call the function and get the updated cart with doubled quantities
  const updatedCart = doubleQuantityOfItems(cart);
  
  // Display the updated cart in the console
  console.log(updatedCart);