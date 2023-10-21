function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput');
    const resultElement = document.getElementById('result');

    // Get the Celsius temperature from the input field
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
      // Call the celsiusToFahrenheit function to convert the temperature
      const fahrenheit = celsiusToFahrenheit(celsius);

      // Display the result in the resultElement
      resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
      
    } else {
      // If the input is not a valid number, display an error message
      resultElement.textContent = 'Please enter a valid number for Celsius temperature.';
    
    }
  }