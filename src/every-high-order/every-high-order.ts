/**
 * Retuns true if every elements is true according to the provided predicate function
 * @param arr {el: Array<T>} - array of elements
 * @param fn {(el: T) => boolean} - predicate function
 * @returns boolean
 */
const every = <T>(arr: Array<T>, fn: (el: T) => boolean): boolean => {
  let allTrue = true;
  arr.forEach((el) => {
    allTrue = allTrue === false || !fn(el) ? false : true;
  });
  return allTrue;
};

export default every;
