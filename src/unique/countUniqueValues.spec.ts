import { countUniqueValues } from "./countUniqueValues";

test("countUniqueValues returns the numbero unique values in a sorted list", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  expect(countUniqueValues([])).toBe(0);
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});

// TODO write acceptance test to ensure solution is within
// time and space complexity constraints