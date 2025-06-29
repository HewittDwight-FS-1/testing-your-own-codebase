// Function to check if a string is a palindrome
function isPalindrome(str) {
  if (typeof str !== "string") {
    return false; // Non string is not a palindrome
  }
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non alphanumerics
  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

// Export the function for testing
module.exports = isPalindrome;
