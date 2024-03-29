import OccuranceDictionary from "./OccurrenceDictionary";

const countOccurancesReduce = (listOfWords: string[]): OccuranceDictionary => {
  const uniqueWordDicionaryCount: OccuranceDictionary = listOfWords.reduce(
    updateWordFrequency,
    {},
  );
  return uniqueWordDicionaryCount;
};

const updateWordFrequency = (
  previousDictionaryCount: OccuranceDictionary,
  word: string,
): OccuranceDictionary => {
  previousDictionaryCount[word] = (previousDictionaryCount[word] || 0) + 1;
  return previousDictionaryCount;
};

export default countOccurancesReduce;
