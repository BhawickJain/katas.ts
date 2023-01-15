/**
 * return boolean evalation of whether at least one pair of numbers exists in a given array that matches a target value
 * O(n) time, O(1) space
 * uses the mutliple pointers technique
 * Algorithm:
 * 1) set low at 0, high at last item index
 * 2) take average of two values at indices low, high
 * 3) if too high, make mid point index at high
 * 4) if too low, make mid point index at low
 * 5) iterate until average equal to target average or low === high
 */
export function averagePair(sortedArr: number[], target: number): boolean{
  if (sortedArr.length < 2) return false
  let low = 0;
  let high = sortedArr.length - 1;
  let avg = (sortedArr[low] + sortedArr[high])/2;
  while (avg !== target && low !== high) {
      if (avg > target) high = high - 1;
      if (avg < target) low = low + 1;
      avg = (sortedArr[low] + sortedArr[high])/2;
  }
  return target === avg;
}