import axios from "axios";
import topN from "./topN";

//moby dick
axios
  .get("https://www.gutenberg.org/files/2701/2701-0.txt")
  .then((res) => res.data.toString())
  .then(processText)
  .catch((err) => console.error(err));

function processText(text: string) {
  const listOfWords = text.slice(0, 100000).split(/\W/);
  const result = getMostCommonWords(listOfWords, 200);
  console.log(result);
}

function getMostCommonWords(listOfWords: string[], numOfWinners: number) {
  return topN(listOfWords, numOfWinners);
}
