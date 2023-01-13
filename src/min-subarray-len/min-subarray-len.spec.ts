import { minSubArrayLen } from "./min-subarray-len";

test("minSubArrayLen returns the correct min length of items needed to add up to or greater than a given sum", () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2); // -> because [4,3] is the smallest subarray
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2); // -> because [5,4] is the smallest subarray
  expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1); // -> because [62] is greater than 52
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3); //
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5); //
  expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2); //
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0); //
});

// TODO write acceptance test to ensure solution is within
// time and space complexity constraints
