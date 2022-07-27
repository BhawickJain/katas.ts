export const generateAllPasswords = (
  charSet: string,
  length: number,
): string[] => {
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

export const appendCharAsCombination = (
  chartSet: string[],
  str: string,
): string[] => {
  return !(str.length > 0) ? chartSet : chartSet.map((c) => `${str}${c}`);
};
