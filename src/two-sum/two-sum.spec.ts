import { twoNum_naive } from "./two-sum";

test.skip("twoSum SHALL return indices of two numbers that add up to target from array of numbers", () => {
  let nums: number[];
  let target: number;
  let output: number[];

  nums = [2, 7, 11, 15];
  target = 9;
  output = [0, 1];
  expect(twoNum_naive(nums, target)).toStrictEqual(output);

  nums = [3, 2, 4];
  target = 6;
  output = [1, 2];
  expect(twoNum_naive(nums, target)).toStrictEqual(output);

  nums = [3, 3];
  target = 6;
  output = [0, 1];
  expect(twoNum_naive(nums, target)).toStrictEqual(output);
});
