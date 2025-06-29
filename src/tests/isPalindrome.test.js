const isPalindrome = require("../functions/isPalindrome");

// Test for isPalindrome
test("detects a basic palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("ignores casing and punctuation", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("returns false for non-palindromes", () => {
  expect(isPalindrome("hello")).toBe(false);
});
