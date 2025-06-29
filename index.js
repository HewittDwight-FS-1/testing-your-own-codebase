// This can be used for manual testing

const sumOfArray = require("./src/functions/sumOfArray");
const reverseString = require("./src/functions/reverseString");
const isPalindrome = require("./src/functions/isPalindrome");
const findMax = require("./src/functions/findMax");

console.log(sumOfArray([1, 2, 3])); // Should print 6
console.log(reverseString("hello")); // Should print "olleh"
console.log(isPalindrome("Racecar")); // Should print true
console.log(findMax([1, 9, 5, 2, "x"])); // Should print 9
