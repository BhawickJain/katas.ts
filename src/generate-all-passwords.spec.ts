import { appendCharAsCombination } from "./generate-all-passwords"

test("appendCharAsCombination return appends each char to the string separately into an array", () => {
    expect(appendCharAsCombination("ab".split(''), "bb")).toStrictEqual(["bba", "bbb"])
    expect(appendCharAsCombination("ab".split(''), "")).toStrictEqual(["a", "b"])
})