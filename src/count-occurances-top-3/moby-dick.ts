import countOccurances from "../count-occurances/count-occurances-1";
// import fetch from "node-fetch";

type occurance = [string, number];

// // //moby dick
// fetch("https://www.gutenberg.org/files/2701/2701-0.txt")
//   .then((data) => data.text())
//   .then(processText)
//   .catch((err: Error) => console.error(err));

// function processText(text: string) {
//   const listOfWords = text.slice(0, 100000).split(/W/);
//   const result = getMostCommonWords(listOfWords, 200);
//   console.log(result);
// }

function getMostCommonWords(
  listOfWords: string[],
  numOfWinners: number,
): occurance[] {
  const occurances = countOccurances(listOfWords);
  console.log(occurances);

  return [["BLAH", -1]];
}

console.log(getMostCommonWords("Elli ELLi ELLi Day".split(/W/), 200));
