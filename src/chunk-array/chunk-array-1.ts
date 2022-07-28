const splitArrays = (inputArray: number[], groupMaxSize: number) => {

  let sharedArrays = []
  let transformedStartingPoint = 0
  let transformedMax = groupMaxSize
  let divideBy = Math.ceil(inputArray.length / groupMaxSize)
  console.log(divideBy)


  for (let i = 0; i < divideBy; i++) {
    	let pushArray = inputArray.slice
      (
        transformedStartingPoint, (transformedMax)
      )
    	sharedArrays.push(pushArray)
    	transformedStartingPoint += groupMaxSize
    	transformedMax += groupMaxSize
  }
  return sharedArrays
}