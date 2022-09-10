// TODO implement reverse-list
/*
Return a copy of the given array, but  in reversed order. Do not mutate the input.

ASSUMPTION:
1. not using built-in methods for reverse
2. array of any type is applicable

FUNCTION: returnReverseList
PARAMS:
  - listOfItems, ARRAY OF ANY TYPE
RETURN: reverseListOfItems, ARRAY OF ANY TYPE
----
DECLARE reverseListOfItems, ARRAY OF ANY TYPE = []

FOR EACH el IN listOfItems
  reverseListOfItems.UNSHIFT(el)
ENDFOR

RETURN reverseListOfItems
----
*/

function returnReverseList(listOfItems) {
  let reverseListOfItems = []

  for (let el of listOfItems) {
    reverseListOfItems.unshift(el)
  }

  return reverseListOfItems
}

/*
EXAMPLES:
returnReverseList(['Hello', 'World']) => ['World', 'Hello']
returnReverseList(['Hello World']) => ['Hello World']
returnReverseList(['Hello World', 1]) => [1, 'Hello World']
returnReverseList([]) => []
returnReverseList([undefined, undefined]) => [undefined, undefined]
*/

