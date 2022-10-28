export type Program = string[];
export type Registers = Record<string, number>;
export type Arguments = string[];
export type LineNumber = number;
export interface ExecutionContext {
  registers: Registers;
  lineNumber: LineNumber;
}
export interface Operation {
  identify: (token: string) => boolean;
  getArgs: (token: string) => Arguments;
  evaluate: (args: Arguments, context: ExecutionContext) => ExecutionContext;
}

export type OperationList = Record<string, Operation>;

/*
initialise register object 
set lineNumber = 0
WHILE lineNumber < length of interstructionArray
	goto lineNumber 
	detect operation
	getArgs for operation
	evaluate args for operation
	spread new executionContext

*/
/*
CodeWars Problem:
https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript
*/
export function simple_assembler(program: Program): Registers {
  const executionContext = {
    registers: {},
    lineNumber: 0,
  };

  while (executionContext.lineNumber < program.length) {
    // for (let i = 0; i < 19; i++) {
    const line: string = getLine(executionContext.lineNumber, program);
    const operation: Operation | null = detectOperation(operations, line);
    if (operation) {
      const args = operation.getArgs(line);
      const newExecutionContext: ExecutionContext = operation.evaluate(
        args,
        executionContext,
      );
      executionContext["registers"] = { ...newExecutionContext.registers };

      // TODO GOTO
      executionContext["lineNumber"] = newExecutionContext.lineNumber;
    } else {
      console.error("Error Occured", executionContext);
    }
  }

  /* return a dictionary with the registers */
  return executionContext.registers;
}

export function getLine(lineNumber: LineNumber, program: Program): string {
  return program[lineNumber];
}

export function detectOperation(
  operationList: OperationList,
  line: string,
): Operation | null {
  for (const operationKey in operationList) {
    const operation: Operation = operationList[operationKey];
    const detectionResult: boolean = operation.identify(line);
    if (detectionResult) {
      return operation;
    }
  }
  return null;
}

const movGetArgs = (token: string): Arguments => {
  const matched = Array.from(token.matchAll(/^mov (.+?) (.*?)$/g));
  if (matched) {
    return [matched[0][1], matched[0][2]];
  } else {
    throw "mov get args failed";
  }
};

const movEvaluate = (args: Arguments, context: ExecutionContext) => {
  // evaluateArgument
  if (isNaN(Number.parseInt(args[1]))) {
    context.registers[args[0]] = context.registers[args[1]];
  } else {
    context.registers[args[0]] = parseInt(args[1]);
  }
  context.lineNumber += 1;
  return context;
};

export const mov: Operation = {
  identify: (token: string): boolean =>
    token.match(/^mov (.+?) (.*?)$/g) !== null,
  getArgs: movGetArgs,
  evaluate: movEvaluate,
};

const incGetArgs = (token: string): Arguments => {
  const matched = Array.from(token.matchAll(/^inc (.+?)$/g));
  if (matched) {
    return [matched[0][1]];
  } else {
    throw "mov get args failed";
  }
};

const incEvaluate = (args: Arguments, context: ExecutionContext) => {
  context.registers[args[0]] += 1;
  context.lineNumber += 1;
  return context;
};

export const inc: Operation = {
  identify: (token: string): boolean => token.match(/^inc (.+?)$/g) !== null,
  getArgs: incGetArgs,
  evaluate: incEvaluate,
};

const decGetArgs = (token: string): Arguments => {
  const matched = Array.from(token.matchAll(/^dec (.+?)$/g));
  if (matched) {
    return [matched[0][1]];
  } else {
    throw "mov get args failed";
  }
};

const decEvaluate = (args: Arguments, context: ExecutionContext) => {
  context.registers[args[0]] -= 1;
  context.lineNumber += 1;
  return context;
};

export const dec: Operation = {
  identify: (token: string): boolean => token.match(/^dec (.+?)$/g) !== null,
  getArgs: decGetArgs,
  evaluate: decEvaluate,
};

const jnzGetArgs = (token: string): Arguments => {
  const matched = Array.from(token.matchAll(/^jnz (.+?) (.*?)$/g));
  if (matched) {
    return [matched[0][1], matched[0][2]];
  } else {
    throw "jnz get args failed";
  }
};

const jnzEvaluate = (args: Arguments, context: ExecutionContext) => {
  if (context.registers[args[0]] !== 0) {
    context.lineNumber += parseInt(args[1]);
  } else {
    context.lineNumber += 1;
  }
  return context;
};

export const jnz: Operation = {
  identify: (token: string): boolean =>
    token.match(/^jnz (.+?) (.*?)$/g) !== null,
  getArgs: jnzGetArgs,
  evaluate: jnzEvaluate,
};

const operations: OperationList = {
  mov: mov,
  inc: inc,
  dec: dec,
  jnz: jnz,
};
