const sum = (arr: number[]): number => {
  return sumRecursively(arr, 0);
};

const sumRecursively = (arr: number[], partialSum: number): number => {
  if (arr.length === 0) {
    return partialSum;
  } else {

    // naive split to acess first and rest
    // const lastIndex = arr.length - 1;
    // const num: number = arr[lastIndex];
    // return sumRecursively([...arr.slice(0, lastIndex)], partialSum + num);

    // spread method to split by first and rest
    const [num, ...rest] = arr
    return sumRecursively([...rest], partialSum + num);

    // unrelated - access lastItem and rest
    // const [...rest, lastItem] = arr.reverse()
  }
};

export default sum;
