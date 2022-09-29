import {
  createArrayUsingPush,
  timeIt,
  timeItResult,
} from "./timing-function-performance";
import { printTable } from "console-table-printer";

// disable jest `console.log` tags
// https://stackoverflow.com/questions/50942189/how-to-disable-jest-console-log-tags?noredirect=1&lq=1
beforeEach(() => {
  global.console = require("console");
});

test("timeIt can return the runtime on array add item operations", () => {
  let n: number;
  let listOfItems: number[];
  let result: timeItResult[];
  const n_Array: number[] = [...Array(7).keys()].map(
    (power) => 100 * Math.pow(10, power),
  );

  result = [];
  for (n of n_Array) {
    listOfItems = createArrayUsingPush(n);
    result.push(
      timeIt(n, function push() {
        listOfItems.push(0);
      }),
    );
  }
  printTable(result);

  result = [];
  for (n of n_Array) {
    listOfItems = createArrayUsingPush(n);
    result.push(
      timeIt(n, function unshift() {
        listOfItems.unshift(0);
      }),
    );
  }
  printTable(result);
});

test("timeIt can return the runtime on array remove item operations", () => {
  let n: number;
  let listOfItems: number[];
  let result: timeItResult[];
  const n_Array: number[] = [...Array(7).keys()].map(
    (power) => 100 * Math.pow(10, power),
  );

  result = [];
  for (n of n_Array) {
    listOfItems = createArrayUsingPush(n);
    result.push(
      timeIt(n, function pop() {
        listOfItems.pop();
      }),
    );
  }
  printTable(result);

  result = [];
  for (n of n_Array) {
    listOfItems = createArrayUsingPush(n);
    result.push(
      timeIt(n, function shift() {
        listOfItems.shift();
      }),
    );
  }
  printTable(result);
});
