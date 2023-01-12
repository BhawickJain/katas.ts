/**
 * returns the max sum of consecutive numbers of N length in a given list of numbers.
 * O(n) time complexity
 * uses the multiple pointers technique
 * @param listOfNum array of numbers
 * @param length length of the consecutive sum
 * @returns max sum value found
 */
export function maxSubarraySum(
  listOfNum: number[],
  length: number,
): number | null {
  let idx0 = 0;
  let idxN = length - 1;
  if (idxN >= listOfNum.length) return null;
  let maxSum = listOfNum.slice(idx0, idxN + 1).reduce((sum, a) => sum + a);
  let currSum = maxSum;

  while (idxN + 1 < listOfNum.length) {
    currSum -= listOfNum[idx0];
    idx0 += 1;
    idxN += 1;
    currSum += listOfNum[idxN];
    if (currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
}
