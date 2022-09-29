import { performance } from "perf_hooks";

export interface timeItResult {
  n: number;
  fn_name: string;
  time_ms: string;
}

export function timeIt(n: number, callbackFn: () => void): timeItResult {
  const startTime = performance.now();
  callbackFn();
  const stopTime = performance.now();
  const millisecondsRuntime = stopTime - startTime;
  return {
    n: n,
    fn_name: `${callbackFn.name}`,
    time_ms: millisecondsRuntime.toFixed(10),
  };
}

export function createArrayUsingPush(numberOfItems: number): number[] {
  const newArray: number[] = [];
  for (let i = 0; i < numberOfItems; i++) {
    newArray.push(0);
  }
  return newArray;
}

export function createArrayUsingUnshift(numberOfItems: number): number[] {
  const newArray: number[] = [];
  for (let i = 0; i < numberOfItems; i++) {
    newArray.unshift(0);
  }
  return newArray;
}

export function removeArrayItemUsingPop(
  listOfItems: number[],
  numberOfItems: number,
): void {
  for (let i = 0; i < numberOfItems; i++) {
    listOfItems.pop();
  }
}

export function removeArrayItemUsingShift(
  listOfItems: number[],
  numberOfItems: number,
): void {
  for (let i = 0; i < numberOfItems; i++) {
    listOfItems.shift();
  }
}
