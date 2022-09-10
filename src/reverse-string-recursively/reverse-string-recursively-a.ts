const reverseString = (inputString: string): string => {
  return reverseStringRecursively(inputString, "");
};

const reverseStringRecursively = (
  remainingString: string,
  reversedPartial: string,
): string => {
  if (remainingString.length === 0) {
    return reversedPartial;
  } else {
    const char = remainingString.substring(0, 1);
    const newReversedPartial = `${char}${reversedPartial}`;
    const newRemainingString = remainingString.substring(1);
    return reverseStringRecursively(newRemainingString, newReversedPartial);
  }
};

export default reverseString;
