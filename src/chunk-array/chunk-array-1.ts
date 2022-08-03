const splitArrays = (inputArray: number[], groupMaxSize: number) => {
  const sharedArrays = [];
  let transformedStartingPoint = 0;
  let transformedMax = groupMaxSize;
  const divideBy = Math.ceil(inputArray.length / groupMaxSize);

  for (let i = 0; i < divideBy; i++) {
    const pushArray: number[] = inputArray.slice(
      transformedStartingPoint,
      transformedMax,
    );
    sharedArrays.push(pushArray);
    transformedStartingPoint += groupMaxSize;
    transformedMax += groupMaxSize;
  }
  return sharedArrays;
};

export default splitArrays;
