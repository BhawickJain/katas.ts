import chunkArray from "./chunk-array-0";
import splitArrays from "./chunk-array-1";

const implementations: ((arr: number[], size: number) => number[][])[] = [
  chunkArray,
  splitArrays,
];

implementations.forEach((imp) => {
  test(`${imp.name} can return an array with an expect number of arrays`, () => {
    expect(imp([1, 2, 3, 4, 5, 6, 7], 4)).toHaveLength(2);
    expect(imp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 4)).toHaveLength(4);
    expect(imp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toHaveLength(3);
    expect(imp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)).toHaveLength(3);
    expect(imp([1, 2, 3, 4, 5, 6, 7, 8], 2)).toHaveLength(4);
    expect(imp([1, 2, 3, 4, 5, 6, 7, 9], 3)).toHaveLength(3);
    expect(imp([10, 20, 30, 40, 50], 4)).toHaveLength(2);
  });
});
