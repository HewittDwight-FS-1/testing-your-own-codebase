// Function to Calculate the sum of all numbers in an array
function sumOfArray(arr) {
  if (!Array.isArray(arr)) return 0; // If input is not an array, return 0
  return arr.reduce((sum, value) => {
    return typeof value === "number" ? sum + value : sum; // Only sum numeric values
  }, 0);
}

// Exporting the function so it can be tested
module.exports = sumOfArray;
