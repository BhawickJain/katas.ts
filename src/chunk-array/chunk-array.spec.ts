import chunkArray from "./chunk-array-0"

test("splitArray can return an array with an expect number of arrays", () => {
expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 4)).toHaveLength(2)
expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 4)).toHaveLength(4)
expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toHaveLength(3)
expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4)).toHaveLength(3)
expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)).toHaveLength(4)
expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 9], 3)).toHaveLength(3)
expect(chunkArray([10, 20, 30, 40, 50],4)).toHaveLength(2)
})