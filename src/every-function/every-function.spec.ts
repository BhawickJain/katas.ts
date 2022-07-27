import every from "./every-function";

test("every returns if numbers in an array are all even", () => {
  const isEven = (el) => el % 2 === 0;
  expect(every([2, 6, 8, 2, 7], isEven)).toBe(false);
});

test("every returns whether all numbers in the array are less than 10", () => {
  expect(every([2, 6, 8, 2, 7], (v) => v < 10)).toBe(true);
});
