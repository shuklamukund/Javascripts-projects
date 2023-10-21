function capitalizeFirstLetter(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstLetter = firstLetter === firstLetter.toLowerCase() ? firstLetter.toUpperCase() : firstLetter;
    return capitalizedFirstLetter + name.slice(1);
  }