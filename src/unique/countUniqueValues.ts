/**
 * returns the number of unique values present in the sorted list
 * O(n) time, O(1) space.
 * Uses Multiple Pointers Technique
 * @param sortedNumArr a list of numbers that is sorted
 * @returns number of unique values present in the list
 */
export function countUniqueValues(sortedNumArr: number[]): number {
  const changeIdx = [];
  let prevVal: null | number = null;
  for (const valIdx in sortedNumArr) {
    if (prevVal !== sortedNumArr[valIdx]) changeIdx.push(valIdx);
    prevVal = sortedNumArr[valIdx];
  }
  return changeIdx.length;
}
