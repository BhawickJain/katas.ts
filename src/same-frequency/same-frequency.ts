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

function countDigitFrequency(num: number): Record<string, number> {
  const freq: Record<string, number> = {};
  const strNum = `${num}`;
  for (const digit of strNum) {
    freq[digit] = freq[digit] + 1 || 1;
  }
  return freq;
}
