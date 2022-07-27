export const generateAllPasswords = (charSet: string, length: number): string[] => {
  return recursivelyGenerateCombinations(charSet.split(""), length, []);
};

export const recursivelyGenerateCombinations = (
  charSet: string[],
  length: number,
  partial: string[],
): string[] => {
  const partialPasswordSet =
    partial.length === 0
      ? charSet
      : partial.map((str) => appendCharAsCombination(charSet, str)).flat();
  return partialPasswordSet[0].length === length
    ? partialPasswordSet
    : recursivelyGenerateCombinations(charSet, length, partialPasswordSet);
};

export const appendCharAsCombination = (chartSet: string[], str: string): string[] => {
  return !(str.length > 0) ? chartSet : chartSet.map((c) => `${str}${c}`);
};


// console.log(generateAllPasswords('a', 1), ["a"])
// console.log(generateAllPasswords('a', 2), ["aa"])
// console.log(generateAllPasswords('ab', 2), ["aa", "ab", "ba", "bb"])
// console.log(generateAllPasswords('ab!', 3), ["aaa", "aab", "aa!", "aba", "abb", "ab!", "a!a", "a!b", "a!!", "baa", "bab", "ba!", "bba", "bbb", "bb!", "b!a", "b!b", "b!!", "!aa", "!ab", "!a!", "!ba", "!bb", "!b!", "!!a", "!!b", "!!!"])
// console.log(generateAllPasswords('ab!', 2), ["aa", "ab", "a!", "ba", "bb", "b!", "!a", "!b", "!!"])