import { appendCharAsCombination, generateAllPasswords } from "./generate-all-passwords"

test("appendCharAsCombination return appends each char to the string separately into an array", () => {
    expect(appendCharAsCombination("ab".split(''), "bb")).toStrictEqual(["bba", "bbb"])
    expect(appendCharAsCombination("ab".split(''), "")).toStrictEqual(["a", "b"])
})

test("generateAllPasswords returns every combination possible for a charset and length", () => {
expect(generateAllPasswords('a', 1)).toStrictEqual(["a"])
expect(generateAllPasswords('a', 2)).toStrictEqual(["aa"])
expect(generateAllPasswords('ab', 2)).toStrictEqual(["aa", "ab", "ba", "bb"])
expect(generateAllPasswords('ab!', 3)).toStrictEqual(["aaa", "aab", "aa!", "aba", "abb", "ab!", "a!a", "a!b", "a!!", "baa", "bab", "ba!", "bba", "bbb", "bb!", "b!a", "b!b", "b!!", "!aa", "!ab", "!a!", "!ba", "!bb", "!b!", "!!a", "!!b", "!!!"])
expect(generateAllPasswords('ab!', 2)).toStrictEqual(["aa", "ab", "a!", "ba", "bb", "b!", "!a", "!b", "!!"])
})