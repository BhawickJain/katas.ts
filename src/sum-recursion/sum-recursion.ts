const sum = (arr: number[]): number => {
   return recurseSum(arr, 0)
}

const recurseSum = (arr: number[], partialSum: number): number => {
    if (arr.length === 0) {
        return partialSum
    } else {
        const lastIndex = arr.length - 1
        const num: number = arr[lastIndex]
        return recurseSum([...arr.slice(0, lastIndex)], partialSum + num)
    }
}

export default sum