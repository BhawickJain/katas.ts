import sum from "./sum-recursion";

test("sum returns sum of an array of number using recursion", () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([-1, -2, 3])).toBe(0);
});
