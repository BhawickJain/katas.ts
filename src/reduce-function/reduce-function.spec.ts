import reduce from "./reduce-function";

test("reduce returns a sum of an array of numbers", () => {
  const sum = (a: number, b: number): number => a + b;
  expect(reduce([1, 2, 3], sum, 0)).toBe(6);
});

test("reduce returns a concatenation of an array of numbers", () => {
  const concat = (a: number | string, b: number): string => `${a}${b}`;
  expect(reduce([1, 2, 3], concat, "")).toBe("123");
  const str = reduce([1, 2, 3], concat, "");
  console.log(str.length);
});

test("reduce can handle empty array returns a concatenation of an array of numbers", () => {
  const concat = (a: string, b: number): string => `${a}${b}`;
  expect(reduce([], concat, "")).toBe("");
  const str = reduce([1, 2, 3], concat, "");
  console.log(str.length);
});

// test("reduce returns a flattened array of numbers", () => {
//     const inputArrayNested : number[][] = [[1], [2, 3], [4, 5, 6]]
//     const flatten = <T>(a: Array<T>, b: Array<T>): Array<T> => [...a, ...b]
//     expect(reduce(inputArrayNested, flatten)).toBe('123')
// })
