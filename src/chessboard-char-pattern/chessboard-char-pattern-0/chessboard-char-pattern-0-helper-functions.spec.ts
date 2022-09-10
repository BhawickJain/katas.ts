import { generateCheckerPattern, generateChessStringPattern, getArrayOfPatternRequests } from "./chessboard-char-pattern-0"

test("generateChessStringPattern generate patterns of various sizes in console log", () => {
    // TODO side effect so nothing to be expected
    expect(generateChessStringPattern([0,0]))
    expect(generateChessStringPattern([1,1]))
    expect(generateChessStringPattern([2,2]))
    expect(generateChessStringPattern([0,3]))
    expect(generateChessStringPattern([3,0]))
})


test("generateCheckerPattern can create a checker pattern for a row given a linear pattern", () => {
    expect(generateCheckerPattern(['*', '.'], 1)).toBe('*')
    expect(generateCheckerPattern(['*', '.'], 2)).toBe('*.')
})


test("getArrayOfPatternRequests", () => {
    // TODO side effect so nothing to properly test
    expect(getArrayOfPatternRequests(['1 1', '2 2', '3 3']))
})