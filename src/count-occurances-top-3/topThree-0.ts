import Dictionary from "../count-occurances/Dictionary";
import countOccurancesOne from "../count-occurances/count-occurances-1";
import convertObjectToArray from "./convertObjectToArray";

const topThreeTwo = (inputString: string): [string, number][] => {
  const occurancesObject: Dictionary<number> = countOccurancesOne(inputString);
  const occurancesArray: [string, number][] =
    convertObjectToArray(occurancesObject);
  const sortedByTopOccurances: [string, number][] = occurancesArray.sort(
    (a, b) => sortByOccurances(a, b),
  );
  return sortedByTopOccurances.slice(0, 3);
};

const sortByOccurances = (
  occuranceA: [string, number],
  occuranceB: [string, number],
) => {
  return occuranceB[1] - occuranceA[1];
};

export default topThreeTwo;
