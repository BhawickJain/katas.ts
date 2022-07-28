import partition from "./partition-high-order";

test("partition returns two array of numbers separated by whether they are odd", () => {
  function isOdd(n: number) {
    return n % 2 !== 0;
  }
  const testParition = partition([1, 7, 2, 40, 5, 800, 40], isOdd);
  const expectedResult = [
    [1, 7, 5],
    [2, 40, 800, 40],
  ];
  expect(testParition).toStrictEqual(expectedResult);
});

test("partition returns two arrays of string split by whether the name is short", () => {
  const isShortName = (str: string): boolean => {
    return str.length <= 4;
  };

  const results = partition(
    ["yunas", "sena", "maryam", "tavija", "liv", "seb", "bukola", "dafe"],
    isShortName,
  );
  const expectedResult = [
    ["sena", "liv", "seb", "dafe"],
    ["yunas", "maryam", "tavija", "bukola"],
  ];
  expect(results).toStrictEqual(expectedResult);
});
