/**
 * returns a boolean evaluation of whether 2 numbers contains an identical frequency of digits
 * @param n1 number 1 for comparison
 * @param n2 number 2 for comparison
 * @returns boolean, true when frequency of occuring digits is identical, false otherwise
 */
export function sameFrequency(n1: number, n2: number): boolean {
  if (`${n1}`.length !== `${n2}`.length) return false;
  const freqN1 = countDigitFrequency(n1);
  const freqN2 = countDigitFrequency(n2);
  for (const key in freqN1) {
    if (freqN2[key] === undefined) return false;
    if (freqN2[key] !== freqN1[key]) return false;
  }
  return true;
}

/**
 * returns a dictionary of digit frequencies given a number
 * @param num number input that will have its digits counted
 * @returns dictionary of numbers digits in string char and their number of occurances
 */
function countDigitFrequency(num: number): Record<string, number> {
  const freq: Record<string, number> = {};
  const strNum = `${num}`;
  for (const digit of strNum) {
    freq[digit] = freq[digit] + 1 || 1;
  }
  return freq;
}
