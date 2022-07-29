import reduce from "./reduce-function"

test("reduce returns a sum of an array of numbers", () => {
    const sum = (a: number, b: number): number => a + b
    expect(reduce([1, 2, 3], sum)).toBe(6)
})

test("reduce returns a concatenation of an array of numbers", () => {
    const concat = (a: number | string, b: number): string => `${a}${b}`
    expect(reduce([1, 2, 3], concat)).toBe('123')
})