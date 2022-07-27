const filter = <T>(arr: Array<T>, fn: (el: T) => boolean): Array<T> => {
  const filteredArr: Array<T> = [];

  arr.forEach((el: T) => {
    fn(el) ? filteredArr.push(el) : "";
  });

  console.log(filteredArr);

  return filteredArr;
};

export default filter;
