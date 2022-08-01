/*
Robot Path 2

CONCEPTS
navigation
arrayOfDestinations
optimalPath

ASSUMPTIONS
- destinations array does not necessary consists of optimal nagivation paths to a specific destination
- input navigation does not  necessary consists of optimal nagivation paths to a specific destination
- non-compass directions in input are ignored.

CLEANING
 - cancelling ew and ns navigation steps
 - alphabetical ordering
 - lowercase all string items
 - validate 
 - shortestDestinationsPath.join.split('')
 - map(isNavigationStep)
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

export default reachesAnyDestination