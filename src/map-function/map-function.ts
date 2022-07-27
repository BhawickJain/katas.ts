const map = <TypeA, TypeB>(
  arr: Array<TypeA>,
  fn: (el: TypeA) => TypeB,
): Array<TypeA | TypeB> => {
  const mappedArray: Array<TypeB> = [];

  arr.forEach((el) => {
    mappedArray.push(fn(el));
  });

  return mappedArray;
};

export default map;
