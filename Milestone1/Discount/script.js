 // Function to calculate the percentage of discount
 const calculateDiscountPercentage = () => {
    const originalPriceInput = document.getElementById('originalPrice');
    const discountedPriceInput = document.getElementById('discountedPrice');
    
    const originalPrice = parseFloat(originalPriceInput.value);
    const discountedPrice = parseFloat(discountedPriceInput.value);

    if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
      alert('Please enter valid original price and discounted price.');
      return;
    }

    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;

    const discountPercentageDisplay = document.getElementById('discountPercentage');
    discountPercentageDisplay.textContent = `You save ${discountPercentage.toFixed(2)}%`;
  }
