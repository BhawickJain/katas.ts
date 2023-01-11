/**
 * Return if two string inputs are anagrams of each other.
 * O(n) time complexity
 * Algorithm
 *  0) if length does not match return false
 *  1) count frequency of each word
 *  2) if number of keys in each count does not match return false
 *  3) for each letter, check if letter exists
 *  4) if exists, if frequency matches continue
 *  5) otherwise return false
 * @param wordA anagram candidate A
 * @param wordB anagram candidate B
 * @returns boolean, evaluation of wether pair are anagrams
 */
export function validAnagram(wordA: string, wordB: string): boolean {
  if (wordA.length !== wordB.length) return false;
  const wordAFreq = countFrequency(wordA);
  const wordBFreq = countFrequency(wordB);
  if (Object.keys(wordBFreq).length !== Object.keys(wordAFreq).length)
    return false;
  for (const key in wordAFreq) {
    if (wordAFreq[key] !== wordBFreq[key]) return false;
  }
  return true;
}

function countFrequency(str: string) {
  const freq: Record<string, number> = {};
  for (const letter of str) {
    freq[letter] = freq[letter] + 1 || 1;
  }
  return freq;
}
