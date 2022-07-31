/*
Robot Path 2

navigation
arrayOfDestinations
optimalPath

ASSUMPTIONS
- destinations array does not necessary consists of optimal nagivation paths to a specific destination
- input navigation does not  necessary consists of optimal nagivation paths to a specific destination
- non-compass directions in input are ignored.

cleaning
 - cancelling ew and ns navigation steps
 - alphabetical ordering
 - lowercase all string items
 - validate 
 - shortestDestinationsPath.join.split('')
 - map(isNavigationStep)


reducesToShortestPath

shortestDestinationsPath.map(() => cleaning())


["ef","g"].join.split('') -> e, f, g

interface cartesianCoord {
[e, w, e, s, n].reduce[reduceDirections, new cartesianCoord] -> [0,1] 

e, w -> 



[0,1] 
*/

interface cartesianCoord {
  n: number,
  e: number,
}

const compassDir = ['n', 's', 'w', 'e'];


function reachesAnyDestination(navigation: string[], arrayOfDestinations: string[][]): boolean {
  
  const cleanedNavigationPath: string[] = clean(navigation)
  const cleanedDestinationsPaths: string[][] = arrayOfDestinations.map((dest) => clean(dest));
  
  const shortestNavigationPath: cartesianCoord = cleanedNavigationPath.reduce(reduceDirections,{n:0, e:0})
  const shortestDestinationsPaths: cartesianCoord[] = cleanedDestinationsPaths.map((dest) => dest.reduce(reduceDirections,{n:0, e:0}));
  
  return shortestDestinationsPaths.some((nav) => JSON.stringify(nav) === JSON.stringify(shortestNavigationPath));
}

function clean(listOfDirection: string[]): string[] {
  const separatedDirections: string[] = listOfDirection.join('').split('')  
  const lowercaseDirections: string[] = separatedDirections.map((dir) => dir.toLowerCase())
  const directionsOnly: string[] = lowercaseDirections.filter((a) => compassDir.includes(a));
  
  return directionsOnly;
}

function reduceDirections(cartesianValue: cartesianCoord, dir: string): cartesianCoord {
  if (['n','s'].includes(dir)) {
    dir==='n'?  cartesianValue.n++ : cartesianValue.n--;
  } else {
    dir==='e'?  cartesianValue.e++ : cartesianValue.e--;
  }
  return cartesianValue
}

// Examples:
const destinations = [["e", "n", "e", "e", "n"], ["w", "n", "w", "n", "w", "w", "n"]];
console.log(reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations), "expect: true") // should return true

console.log(reachesAnyDestination(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"], destinations), "expect: false") // should return false

console.log(reachesAnyDestination(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"], destinations), "expect: true"); //should return true

reachesAnyDestination(["n", "s"], [["e"]]) //should return false
console.log(reachesAnyDestination(["n", "s"], [[]]), "expect true"); //should return true