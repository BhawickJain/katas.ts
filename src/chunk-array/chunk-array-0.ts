/*
“Chunk” a given array into smaller arrays of a given size, with one
final group carrying any remainder if necessary.

Given an array `inputArray` and a number `groupSize` , group the
elements of `inputArray` into groups (arrays) of `groupSize` (where
possible) and return a new array containing these smaller arrays.

You can assume groupSize will be bigger than 0.

If the length of inputArray is not a multiple of groupSize, all but one
groups be of size `groupSize` and put the remainder of the elements in
a final subarray.

Example:
chunk([10, 20, 30, 40, 50], 2) -> [ [10, 20], [30, 40], [50] ]
chunk([10, 20, 30, 40, 50], 4) -> [[10, 20, 30, 40], [50]]
*/

const chunkArray = (arr: Array<number>, size: number) => {
  return recurseChunkArray([], arr, size)
}

const recurseChunkArray = (prev: number[][], arr: number[], size: number): number[][] => {

  if (arr.length < size) {
    return [...arr].length === 0 ? [...prev] : [...prev, [...arr]]
  } else {
    prev = [...prev, [...arr.slice(0, size)]]
    console.log(prev)
    return recurseChunkArray(prev, arr.slice(size), size)
  }
  
}

export default chunkArray
