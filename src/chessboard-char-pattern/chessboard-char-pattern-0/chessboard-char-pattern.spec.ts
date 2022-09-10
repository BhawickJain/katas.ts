import { chessboardCharacterPattern } from "./chessboard-char-pattern-0"

const implementations: (() => undefined)[] = [
    () => undefined
]

test("chessboard pattern can ", () => {

    const patternRequest = `3
                            3 1
                            4 4
                            2 5`
  
    expect(chessboardCharacterPattern(patternRequest))

})