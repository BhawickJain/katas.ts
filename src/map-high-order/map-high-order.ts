const map = <TypeA, TypeB>(
  inputArray: TypeA[],
  fn: (el: TypeA) => TypeB,
): TypeB[] => {
  const mappedArray: TypeB[] = [];

  inputArray.forEach((el) => {
    mappedArray.push(fn(el));
  });

  return mappedArray;
};

export default map;
