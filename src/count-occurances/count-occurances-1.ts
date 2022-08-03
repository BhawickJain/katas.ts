/*
PSEUDO CODE

FUNCTION: countOccurances
PARAMS:
 - word, STRING
RETURNS: OBJECT
---
DECLARE occurancesObject = {char: string, count: number}

FOR EACH char IN word
  count, NUMBER = countOccurance(char, word)
  occurancesObject.add(char, count)
ENDFOR

RETURN: occurancesObject
---

FUNCTION: countOccurance
PARAMS:
 - char, STRING
 - word, STRING
RETURNS: count, NUMBER
---
count = 0

FOR EACH letter IN word:
  IF letter === char:
    count = count + 1
  ENDIF
ENDFOR

RETURN count
---
*/

import Dictionary from "./Dictionary";

const countOccurancesOne = (word: string): Dictionary<number> => {
  let occurances: Dictionary<number> = {};

  const uniqueLetters: string = getUniqueLetters(word);

  for (const char of uniqueLetters) {
    const count: number = countOccurance(char, word);
    occurances = {
      ...occurances,
      [char]: count,
    };
  }

  return occurances;
};

const getUniqueLetters = (word: string) => {
  let uniqueLetters = "";

  for (const letter of word) {
    // if letter is not inside uniqueLetters
    //    append to the uniqueLetters
    if (uniqueLetters.indexOf(letter) === -1) {
      // string literal template
      uniqueLetters = `${uniqueLetters}${letter}`;
    }
  }

  return uniqueLetters;
};

const countOccurance = (char: string, word: string) => {
  let count = 0;

  for (const letter of word) {
    if (letter === char) {
      count = count + 1;
    }
  }

  return count;
};

export default countOccurancesOne;
