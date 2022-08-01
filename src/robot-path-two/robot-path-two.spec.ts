
// Examples:
const destinations = [["e", "n", "e", "e", "n"], ["w", "n", "w", "n", "w", "w", "n"]];
console.log(reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations), "expect: true") // should return true

console.log(reachesAnyDestination(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"], destinations), "expect: false") // should return false

console.log(reachesAnyDestination(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"], destinations), "expect: true"); //should return true

reachesAnyDestination(["n", "s"], [["e"]]) //should return false
console.log(reachesAnyDestination(["n", "s"], [[]]), "expect true"); //should return true