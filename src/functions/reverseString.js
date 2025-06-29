// Function to reverse a String
function reverseString(str) {
  if (typeof str !== "string") return ""; // Handle non String input
  return str.split("").reverse().join(""); //Reverse the string
}

// Exporting the function for testing
module.exports = reverseString;
