// Function to create the inverted right-angled triangle
function InvertedRightAngledTriangle(rows) {
    let output = '';
    for (let i = rows; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        output += '* ';
      }
      output += '\n';
    }
    return output;
  }
  
  // Set the number of rows for the triangle
  const numRows = 6; // Change this value to adjust the size of the triangle
  
  // Call the function and print the inverted right-angled triangle to the console
  console.log(InvertedRightAngledTriangle(numRows));