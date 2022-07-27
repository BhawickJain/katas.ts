import filter from "./filter-function";

test("1 -- Filter return positive numbers when given an array of numbers and a isPositive function", () => {
  const isPositive = (num: number): boolean => num > 0;
  expect(filter([-1, 1, 2, -2, 3, -3], isPositive)).toStrictEqual([1, 2, 3]);
  expect(filter([10, 50, -20, -10, 100], v => v < 11)).toStrictEqual([10, -20, -10])
});

test("2 -- Filter return string of more than 5 when given an array of strings and a isGreaterThanLengthFive function", () => {
  const isGreaterThanLengthFive = (str: string): boolean => str.length > 5;
  expect(
    filter(
      ["Hello", "and", "that", "is", "a", "greeting"],
      isGreaterThanLengthFive,
    ),
  ).toStrictEqual(["greeting"]);
  expect(filter("AbcDeFgHI".split(""), ch => ch.toUpperCase() === ch)).toStrictEqual(["A", "D", "F", "H", "I"])
});