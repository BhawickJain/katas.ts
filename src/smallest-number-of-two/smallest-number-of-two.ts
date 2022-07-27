/*
FUNCTION: smallestNumberOfTwo
PARAMS:
- numberA: NUMBER
- numberB: NUMBER
RETURNS: NUMBER
----
DECLARE smallest = null

IF numberA < numberB
  SMALLEST = numberA
ELSE IF numberB < numberA
  SMALLEST = numberB
END IF

RETURN smallest
----
*/

function smallestNumberOfTwo(number_A: number, number_B: number): number {
  const smallest: number = number_A < number_B ? number_A : number_B;
  return smallest;
}

export default smallestNumberOfTwo;
