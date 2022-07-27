import filter from "./filter-function"

test("Filter return positive numbers when given an array of numbers and a isPositive function", () => {
    const isPositive = (num: number): boolean => num > 0
    expect(filter([-1, 1, 2, -2, 3, -3], isPositive)).toStrictEqual([1, 2, 3])
})

test("Filter return string of more than 5 when given an array of strings and a isGreaterThanLengthFive function", () => {
    const isGreaterThanLengthFive = (str: string): boolean => str.length > 5
    expect(filter(['Hello', 'and', 'that', 'is', 'a', 'greeting'], isGreaterThanLengthFive)).toStrictEqual(['greeting'])
})