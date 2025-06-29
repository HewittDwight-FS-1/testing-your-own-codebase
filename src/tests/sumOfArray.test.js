const sumOfArray = require("../functions/sumOfArray");

// Tests for sumOfArray
test("adds numbers correctly", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
});

test("returns 0 for non-array input", () => {
  expect(sumOfArray("hello")).toBe(0);
});

test("ignores non-numeric values", () => {
  expect(sumOfArray([1, "a", 3])).toBe(4);
});
