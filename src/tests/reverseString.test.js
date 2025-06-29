const reverseString = require("../functions/reverseString");

// Tests for reverseString
test("reverse a basic string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("handles empty string", () => {
  expect(reverseString("")).toBe("");
});

test("returns empty string for non-string input", () => {
  expect(reverseString(123)).toBe("");
});
