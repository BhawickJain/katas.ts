const reduce = <T, U>(
  arr: T[],
  callbackFn: (prev: U, curr: T, currentIndex?: number, arr?: T[]) => U,
  initialValue: U,
): U => {
  let prev: U = initialValue;

  for (let i = 0; i < arr.length; i++) {
    const curr: T = arr[i];
    prev = callbackFn(prev, curr, i, arr);
  }

  return prev;
};

export default reduce;
