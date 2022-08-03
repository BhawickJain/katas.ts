import countOccurancesZero from "./count-occurances-0"
import countOccurancesOne from "./count-occurances-1"
import Dictionary from "./Dictionary"

test("countOccurances returns an array of char-count pairs", () => {

    expect(countOccurancesZero("hello")).toStrictEqual([['h', 1], ['e', 1], ['l', 2], ['o', 1]])
    expect(countOccurancesZero("mississippi")).toStrictEqual([['m', 1], ['i', 4], ['s', 4], ['p', 2]])
    expect(countOccurancesZero("necessary")).toStrictEqual([['n', 1], ['e', 2], ['c', 1], ['s', 2], ['a', 1], ['r', 1], ['y', 1]])
    expect(countOccurancesZero("wass'up")).toStrictEqual([['w', 1], ['a', 1], ['s', 2], ["'", 1], ['u', 1], ['p', 1]])

})

const implementations: [(str: string) => Dictionary<number>] = [
    countOccurancesOne
]

implementations.forEach((imp) => {

})

const testImplementation = (imp: (str: string) => Dictionary<number>) => {

    test("Implementation returns an array of char-count pairs", () => {

        expect(imp("hello")).toStrictEqual({ 'h': 1, 'e': 1, 'l': 2, 'o': 1 })
        expect(imp("mississippi")).toStrictEqual({ 'm': 1, 'i': 4, 's': 4, 'p': 2 })
        expect(imp("necessary")).toStrictEqual({ 'n': 1, 'e': 2, 'c': 1, 's': 2, 'a': 1, 'r': 1, 'y': 1 })
        expect(imp("wass'up")).toStrictEqual({ 'w': 1, 'a': 1, 's': 2, "'": 1, 'u': 1, 'p': 1 })

    })


}