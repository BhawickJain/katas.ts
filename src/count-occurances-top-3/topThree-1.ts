import Dictionary from "../count-occurances/Dictionary";
import countOccurancesOne from "../count-occurances/count-occurances-1";
import convertObjectToArray from "./convertObjectToArray";

type Tuple = [string, number];

const topThreeOne = (inputString: string | string[]): Tuple[] => {
  const occurancesObject: Dictionary<number> = countOccurancesOne(inputString);
  const occurancesArray: Tuple[] = Object.entries(occurancesObject);

  const sortedByTopOccurances: Tuple[] = occurancesArray.sort((a, b) =>
    sortByOccurances(a, b),
  );

  return sortedByTopOccurances.slice(0, 3);
};

const sortByOccurances = (occuranceA: Tuple, occuranceB: Tuple) => {
  return occuranceB[1] - occuranceA[1];
};

export default topThreeOne;
