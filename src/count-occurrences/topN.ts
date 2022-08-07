import countOccurrences from "./count-occurrences";
import OccurrenceDictionary from "./OccurrenceDictionary";

type occurrenceTuple = [string, number];

const topN = (listOfWords: string[], topN: number): occurrenceTuple[] => {
  const Occurrences: OccurrenceDictionary = countOccurrences(listOfWords);
  const arrayOfOccurences: occurrenceTuple[] = Object.entries(Occurrences);
  const sortedArrayOfOccurences = arrayOfOccurences.sort(compareOccurrences);
  return sortedArrayOfOccurences.slice(0, topN);
};

const compareOccurrences = (
  occurrenceA: occurrenceTuple,
  occurrenceB: occurrenceTuple,
): number => {
  return occurrenceA[1] > occurrenceB[1] ? -1 : 1;
};

export default topN;
