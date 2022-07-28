const partition = <T>(
  arr: Array<T>,
  callbackFn: (el: T) => boolean,
): [Array<T>, Array<T>] => {
  const arrayFalse: Array<T> = [];
  const arrayTrue: Array<T> = [];
  arr.forEach((el) =>
    callbackFn(el) ? arrayTrue.push(el) : arrayFalse.push(el),
  );

  return [arrayTrue, arrayFalse];
};

export default partition;
