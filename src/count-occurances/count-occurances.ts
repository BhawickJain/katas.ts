import OccuranceDictionary from "./OccuranceDictionary";

const countOccurances = (listOfWords: string[]): OccuranceDictionary => {
  const occurances: OccuranceDictionary = {};

  const uniqueWordList: string[] = getUniqueWordList(listOfWords);
  uniqueWordList.forEach((uniqueWord) => {
    occurances[uniqueWord] = countSingleWordOccurance(listOfWords, uniqueWord);
  });

  return occurances;
};

const getUniqueWordList = (listOfWords: string[]): string[] => {
  const uniqueWordList: string[] = []
  listOfWords.forEach((word) => uniqueWordList.includes(word) || uniqueWordList.push(word))
  return uniqueWordList
}

const countSingleWordOccurance = (listOfWords: string[], targetWord: string): number => {
  let count: number = 0;
  listOfWords.forEach((word) => {count = word === targetWord ? count + 1 : count});
  return count;
};

export default countOccurances;
