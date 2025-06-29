const findMax = require("../functions/findMax");

// Tests for findMax
test("finds the largest number", () => {
  expect(findMax([1, 5, 3])).toBe(5);
});

test("ignores non-numeric values", () => {
  expect(findMax([1, "hello", 10])).toBe(10);
});

test("returns null for non-array input", () => {
  expect(findMax("oops")).toBeNull();
});
