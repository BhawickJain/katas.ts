type chessboardRequest = [number, number];

export function chessboardCharacterPattern(
  chessboardRequest: string,
): void | string {
  const arrayOfInstructions: string[] = chessboardRequest.split("\n");
  const numTestCases: number = getNumOfPatternsFromRequest(arrayOfInstructions);
  const arrayOfChessboardStringRequests: string[] =
    arrayOfInstructions.slice(1);

  // validate request
  if (numTestCases !== arrayOfChessboardStringRequests.length) {
    return "BAD REQUEST: number of test cases does not match number of chessboard patterns requested";
  }

  // trivial case
  if (arrayOfChessboardStringRequests.length < 1) {
    return "";
  }

  const arrayOfChessboardRequests: chessboardRequest[] =
    getArrayOfPatternRequests(arrayOfChessboardStringRequests);
  // console.log(arrayOfChessboardRequests)
  const arrayOfStringChessBoards: string[][] = arrayOfChessboardRequests.map(
    generateChessStringPattern,
  );

  printChessBoard(arrayOfStringChessBoards);
}

function getNumOfPatternsFromRequest(
  arrayOfChessboardStringRequests: string[],
): number {
  const numTestCases: number | string | undefined =
    arrayOfChessboardStringRequests[0];
  console.log(numTestCases);

  if (typeof parseInt(numTestCases) === "number") {
    return parseInt(numTestCases);
  }

  //return 'BAD REQUEST: number of test cases declaration is Not A Number'
  return -1;
}

export function getArrayOfPatternRequests(
  arrayOfPatternsRequests: string[],
): chessboardRequest[] {
  const arrayOfChessboardRequests: chessboardRequest[] =
    arrayOfPatternsRequests.map((pattern) => createChessboardRequest(pattern));
  return arrayOfChessboardRequests;
}

function createChessboardRequest(pattern: string): chessboardRequest {
  const stringArrayChessboardRequest: string[] = pattern.split(" ");

  if (stringArrayChessboardRequest.length === 2) {
    const intChessboardRequest: number[] = stringArrayChessboardRequest.map(
      (str) => parseInt(str),
    );
    const rows: number = intChessboardRequest[0];
    const columns: number = intChessboardRequest[1];
  }

  return [0, 0];
}

export function generateChessStringPattern(
  chessboardRequestInput: chessboardRequest,
): string[] {
  const [rows, columns] = chessboardRequestInput;
  const chessStringPattern: string[] = [];

  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      chessStringPattern.push(generateCheckerPattern(["*", "."], columns));
    } else {
      chessStringPattern.push(generateCheckerPattern([".", "*"], columns));
    }
  }

  return chessStringPattern;
}

export function generateCheckerPattern(
  patternList: [string, string],
  length: number,
): string {
  const patternjoined: string = patternList.join("");
  const remainder: number = length % patternList.length;
  const multiple: number = (length - remainder) / patternList.length;
  const remainingPattern = patternjoined.slice(0, remainder);

  return `${patternjoined.repeat(multiple)}${remainingPattern}`;
}

// side-effect so not worth testing
function printChessBoard(arrayOfStringChessBoards: string[][]): void {
  arrayOfStringChessBoards.forEach((chessboard) => {
    console.log("\n");
    chessboard.forEach((row) => {
      console.log(row);
    });
  });
}
