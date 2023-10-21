function calculateRentalCost(daysRented, carType) {
    const economyCostPerDay = 4000;
    const midsizeCostPerDay = 15000;
    const luxuryCostPerDay = 20000;
  
    let rentalCost;
  
    switch (carType.toLowerCase()) {
      case 'economy':
        rentalCost = economyCostPerDay;
        break;
      case 'midsize':
        rentalCost = midsizeCostPerDay;
        break;
      case 'luxury':
        rentalCost = luxuryCostPerDay;
        break;
      default:
        throw new Error('Invalid car type. Supported car types are: Economy, Midsize, Luxury.');
    }
  
    return rentalCost * daysRented;
  }
  
  // Example usage:
  const daysRented = 5;
  const carType = 'Economy';
  const totalCost = calculateRentalCost(daysRented, carType);
  console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalCost}/-`);
