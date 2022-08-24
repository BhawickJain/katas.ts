import { GuessMark } from "./GuessMark";
/**
 *
 * @param guessWord {string} - user's guess matching same length as target word
 * @param targetWord  {string} - hidden target word to be guessed
 */
export const wordle = (guessWord: string, targetWord: string): GuessMark[] => {
  const guessArray = lowercaseAndSplitIntoArray(guessWord);
  const targetArray = lowercaseAndSplitIntoArray(targetWord);
  let  unmarkedTargetChars: string[] = [];
  const markedWordle: GuessMark[] = [];

  for (let pos in guessArray) {
    if (guessArray[pos] === targetArray[pos]) {
      markedWordle.push("MATCH");
    } else {
      markedWordle.push("NOT_PRESENT");
      unmarkedTargetChars.push(targetArray[pos]);
    }
  }

    console.log("unmarkedTargetChars", unmarkedTargetChars);
  console.log("guessWord", guessArray);
  console.log("markedWordle", markedWordle);
  for (let pos in markedWordle) {
    if (markedWordle[pos] === "NOT_PRESENT") {
      const indexOfNotPresentWorld = unmarkedTargetChars.indexOf(
        guessArray[pos],
      );
    //   console.log("index", indexOfNotPresentWorld)
      if (indexOfNotPresentWorld !== -1) {
        console.log('letter:', guessArray[pos], 'marked wrong position')
        markedWordle[pos] = "BAD_POSITION";
        console.log(unmarkedTargetChars)
        unmarkedTargetChars[indexOfNotPresentWorld] = '*'
        console.log(unmarkedTargetChars)
    }
}
}


  return markedWordle;
};

/**
 * returns array of characters stripped of case.
 * @param inputString {string}
 * @returns
 */
function lowercaseAndSplitIntoArray(inputString: string): string[] {
  const lowercased = inputString.toLowerCase();
  return lowercased.split("");
}

export function removeItemAtIndex<T>(array: T[], position: number): T[] {
    const newArray:T[] = array.filter((el, i) => i !== position)
    return newArray
}