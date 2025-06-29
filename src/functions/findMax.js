// Function to find the largest number in an array
function findMax(arr) {
  // Handle invalid input
  if (!Array.isArray(arr) || arr.length === 0) return null;
  // Filter out non numbers
  const numericOnly = arr.filter((item) => typeof item === "number");
  if (numericOnly.length === 0) return null;
  // Return the highest numbere
  return Math.max(...numericOnly);
}

// Exportin for use in tests
module.exports = findMax;
