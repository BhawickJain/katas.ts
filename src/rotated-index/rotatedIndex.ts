export function findRotatedIndex(
  arr: number[],
  value: number,
  start = 0,
  end = arr.length - 1,
): number {
  if (arr.length === 0 || start > end) return -1;
  if (arr[start] < arr[end]) {
    if (arr[start] <= value && arr[end] >= value) {
      return binarySearch(arr, value, start, end);
    } else {
      return -1;
    }
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === value) {
    return mid;
  } else {
    const left = findRotatedIndex(arr, value, start, mid - 1);
    const right = findRotatedIndex(arr, value, mid + 1, end);
    if (left !== -1) return left;
    if (right !== -1) return right;
    return -1;
  }
}

function binarySearch(
  arr: number[],
  value: number,
  start = 0,
  end = arr.length - 1,
): number {
  if (arr.length === 0 || start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === value) return mid;
  if (arr[mid] <= value) return binarySearch(arr, value, mid + 1, end);
  else return binarySearch(arr, value, start, mid - 1);
}
