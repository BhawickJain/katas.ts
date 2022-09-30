import { printTable } from "console-table-printer";
import { timeItResult, timeIt } from "../timing-function-performance/timing-function-performance";
import { twoNum_naive, twoNum_one } from "./two-sum"

const implementations: ((nums: number[], target: number) => [number, number])[] = [
    twoNum_naive,
    twoNum_one
]

// disable jest `console.log` tags
// https://stackoverflow.com/questions/50942189/how-to-disable-jest-console-log-tags?noredirect=1&lq=1
beforeEach(() => {
    global.console = require("console");
});


for (let imp of implementations) {

    test.skip(`time ${imp.name} algorithm`, () => {

        let n: number;
        let nums: number[]
        let listOfItems: number[];
        let target: number;
        let result: timeItResult[];

        /*
        [0, 0, 0, 1, 1]
        [0, 0, 0, 0, 0, 1, 1]
        Nick White
        */

        n = 1_000
        nums = [...Array(n)].map((el) => 0)
        target = 2
        result = []

        result = [];
        for (let len = 1; len <= n; len *= 10) {

            listOfItems = [...nums]
            listOfItems[len - 1] = 1
            listOfItems[len] = 1
            function voidImp() {
                imp(listOfItems, target)
            }

            result.push(
                timeIt(len, voidImp),
            );
        }
        console.log('\n')
        console.log(imp.name)
        printTable(result);

    })

}

for (let imp of implementations) {

    test.skip(`time ${imp.name} algorithm`, () => {

        let n: number;
        let nums: number[]
        let listOfItems: number[];
        let target: number;
        let result: timeItResult[];

        /*
        [0, 0, 0, 1, 1]
        [0, 0, 0, 0, 0, 1, 1]
        Nick White
        */

        n = 1_000
        nums = [...Array(n).keys()]
        result = []

        result = [];
        for (let len = 1; len <= n; len *= 10) {

            target = nums[len - 1] + nums[len - 2]
            listOfItems = [...nums]
            function voidImp() {
                imp(listOfItems, target)
            }

            result.push(
                timeIt(len, voidImp),
            );
        }
        console.log('\n')
        console.log(imp.name)
        printTable(result);

    })

}