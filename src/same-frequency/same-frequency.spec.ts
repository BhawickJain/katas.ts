import { sameFrequency } from "./same-frequency";

test("sameFrequency returns ture for numbers that the same frequency of digits, otherwise false", () => {
  expect(sameFrequency(182, 281)).toBe(true);
  expect(sameFrequency(34, 14)).toBe(false);
  expect(sameFrequency(3589578, 5879385)).toBe(true);
  expect(sameFrequency(22, 222)).toBe(false);
});
