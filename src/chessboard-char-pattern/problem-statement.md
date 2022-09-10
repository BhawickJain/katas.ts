Using two characters: . (dot) and _ (asterisk) print a chessboard-like
pattern. The first character printed should be _ (asterisk).

Input

You are given t < 100 - the number of test cases and for each of the
test cases two positive integers: l - the number of lines and c - the
number of columns in the pattern (l, c < 100).

output

For each of the test cases output the requested pattern (please have a
look at the example). Use one line break in between successive patterns.

example

input:
3
3 1
4 4
2 5

output:

- .
- _._.
  ._._
  _._.
  ._._

  _._._
  ._.\*.

  ***

FUNCTION chessboardCharacterPattern
PARAMS:

- chessPatternRequest, STRING
  RETURNS: VOID

---

IF chessPatternRequest.LENGTH = 0

DECLARE arrayOfPatternsRequests, STRING[] = chessPatternRequest.SPLIT('\n\)
DECLARE numTestCases, INTEGER := arrayOfPatternsRequests.shift()
DECLARE arrayOfPatternsRequests, ARRAY OF [INTEGER, INTEGER] := getArrayOfPatternRequests(arrayOfPatternsRequests)
DECLARE arrayOfPatterns, ARRAY OF STRING[] := arrayOfPatternsRequests.MAP(generateChessPattern)
printChessPatternResult(arrayOfPatterns)

---
