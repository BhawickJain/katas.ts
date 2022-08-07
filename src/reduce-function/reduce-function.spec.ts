import reduce from "./reduce-function";

test("reduce returns a sum of an array of numbers", () => {
  const sum = (a: number, b: number): number => a + b;
  expect(reduce([1, 2, 3], sum, 0)).toBe(6);
});

test("reduce returns a concatenation of an array of numbers", () => {
  const concat = (a: number | string, b: number): string => `${a}${b}`;
  expect(reduce([1, 2, 3], concat, "")).toBe("123");
  const str = reduce([1, 2, 3], concat, "");
});

test("reduce can handle empty array returns a concatenation of an array of numbers", () => {
  const concat = (a: string, b: number): string => `${a}${b}`;
  expect(reduce([], concat, "")).toBe("");
  const str = reduce([1, 2, 3], concat, "");
});

test("reduce returns a flattened array of numbers", () => {
    const inputArrayNested : number[][] = [[1], [2, 3], [4, 5, 6]]
    const flatten = (a: number[], b: number[]): number[] => [...a, ...b]
    expect(reduce(inputArrayNested, flatten, [])).toStrictEqual([1, 2, 3, 4, 5, 6])
})








test("reduce returns a flattened array of numbers", () => {
    const inputArrayNested : number[][] = [[1], [2, 3], [4, 5, 6]]
    const flatten = <T>(a: T[], b: T[]): T[] => [...a, ...b]
    expect(reduce(inputArrayNested, flatten<number>, [])).toStrictEqual([1, 2, 3, 4, 5, 6])

    expect(reduce(inputArrayNested, (a: number[], b: number[]) => flatten<number>(a, b), [])).toStrictEqual([1, 2, 3, 4, 5, 6])
})