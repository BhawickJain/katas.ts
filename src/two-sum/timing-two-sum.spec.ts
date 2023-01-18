import { printTable } from "console-table-printer";
import {
  timeItResult,
  timeIt,
} from "../timing-function-performance/timing-function-performance";
import { twoNum_naive, twoNum_one } from "./two-sum";

const implementations: ((
  nums: number[],
  target: number,
) => [number, number])[] = [twoNum_naive, twoNum_one];

// disable jest `console.log` tags
// https://stackoverflow.com/questions/50942189/how-to-disable-jest-console-log-tags?noredirect=1&lq=1
beforeEach(() => {
  global.console = require("console");
});

for (const imp of implementations) {
  test.skip(`time ${imp.name} algorithm`, () => {
    const n = 1_000;
    const nums: number[] = [...Array(n)].map(() => 0);
    let listOfItems: number[];
    const target = 24;
    const result: timeItResult[] = [];

    for (let len = 1; len <= n; len *= 10) {
      listOfItems = [...nums];
      listOfItems[len - 1] = 1;
      listOfItems[len] = 1;
      function voidImp() {
        imp(listOfItems, target);
      }

      result.push(timeIt(len, voidImp));
    }
    console.log("\n");
    console.log(imp.name);
    printTable(result);
  });
}

for (const imp of implementations) {
  test.skip(`time ${imp.name} algorithm`, () => {
    const n = 1_000;
    const nums: number[] = [...Array(n).keys()];
    let listOfItems: number[];
    let target: number;
    const result: timeItResult[] = [];

    for (let len = 1; len <= n; len *= 10) {
      target = nums[len - 1] + nums[len - 2];
      listOfItems = [...nums];
      function voidImp() {
        imp(listOfItems, target);
      }

      result.push(timeIt(len, voidImp));
    }
    console.log("\n");
    console.log(imp.name);
    printTable(result);
  });
}
