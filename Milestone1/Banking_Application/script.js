
    // Sample customer object with name and balance properties
    const customer = {
      name: "",
      balance: 1000,
    };

    // Function to update the balance displayed on the page
    const updateBalanceDisplay = () => {
      const balanceInput = document.getElementById('balance');
      balanceInput.value = customer.balance;
    };

    // Function to deposit money into the customer's account
    const deposit = () => {
      const amountInput = document.getElementById('amount');
      const amount = parseFloat(amountInput.value);

      if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a positive number for deposit.");
        return;
      }

      customer.balance += amount;
      updateBalanceDisplay();
      alert(`${customer.name} deposited $${amount}. New balance: $${customer.balance}`);
    };

    // Function to withdraw money from the customer's account
    const withdraw = () => {
      const amountInput = document.getElementById('amount');
      const amount = parseFloat(amountInput.value);

      if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a positive number for withdrawal.");
        return;
      }

      if (amount > customer.balance) {
        alert("Insufficient funds. You cannot withdraw more than your current balance.");
        return;
      }

      customer.balance -= amount;
      updateBalanceDisplay();
      alert(`${customer.name} withdrew $${amount}. New balance: $${customer.balance}`);
    };

    