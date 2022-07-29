const filter = <T>(inputArray: T[], fn: (el: T) => boolean): T[] => {
  const filteredArr: T[] = [];

  inputArray.forEach((el: T) => {
    fn(el) && filteredArr.push(el);
  });

  return filteredArr;
};

export default filter;
