const reverseString = (inputString: string) => {
  return reverseStringRecursively(inputString, 0);
};
const reverseStringRecursively = (
  inputString: string,
  index: number,
): string => {
  if (inputString.length === index) {
    return "";
  } else {
    return `${reverseStringRecursively(inputString, index + 1)}${
      inputString[index]
    }`;
  }
};

export default reverseString;
