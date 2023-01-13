/**
 * find the minimum length of consecutive items which add up to or greater than a given sum
 * time O(n), space O(1)
 * uses mutliple pointers technique
 * @param arr list of numbers
 * @param sum target value the consecutive items should sum up to
 * @returns minimum items needed
 */
export function minSubArrayLen(arr: number[], sum: number): number {
  let minLen = Infinity;
  let idxS = 0;
  let idxE = 0;
  let currSum = arr[0];
  while (idxE < arr.length && idxS <= idxE) {
    if (currSum < sum) {
      idxE += 1;
      currSum += arr[idxE];
    } else {
      const candLen = idxE - idxS + 1;
      if (candLen < minLen) {
        minLen = candLen;
      }
      currSum -= arr[idxS];
      idxS += 1;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
