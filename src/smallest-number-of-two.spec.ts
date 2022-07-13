import smallestNumberOfTwo from "./smallest-number-of-two";

/*
smallestNumberOfTwo(3,10) // return: 3
smallestNumberOfTwo(2,1.9) // return: 1.9
smallestNumberOfTwo(-10,5) // return: -10
smallestNumberOfTwo(-0,0) // return: null
smallestNumberOfTwo(3,3) // return: null

# Comment post test case
Javascript is treating 0 and 0 as equivalent 
numbers so the expected return is null.


*/

test("smallestNumberOfTwo returns smallest among positive numbers", () => {
  expect(smallestNumberOfTwo(3, 10)).toBe(3);
});

test("smallestNumberOfTwo returns smallest among negative numbers", () => {
  expect(smallestNumberOfTwo(-10, -9)).toBe(-10);
});

test("smallestNumberOfTwo returns smallest among a mix of negative and positive numbers", () => {
  expect(smallestNumberOfTwo(-10, 5)).toBe(-10);
});

test("smallestNumberOfTwo returns smallest among equal numbers", () => {
  expect(smallestNumberOfTwo(5, 5)).toBe(5);
  expect(smallestNumberOfTwo(0, 0)).toBe(0);
  expect(smallestNumberOfTwo(-0, 0)).toBe(0);
});

test("smallestNumberOfTwo returns smallest among a decimal numbers", () => {
  expect(smallestNumberOfTwo(2, 1.9)).toBe(1.9);
  expect(smallestNumberOfTwo(-2, 1.9)).toBe(-2);
  expect(smallestNumberOfTwo(-0.1, 0.2)).toBe(-0.1);
});

