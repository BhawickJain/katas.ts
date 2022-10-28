import {
  jnz,
  dec,
  ExecutionContext,
  inc,
  mov,
  simple_assembler,
  getLine,
} from "./simple-assembler-interpreter";

test("simple_assembler SHALL interpret an array of assmembly instructions", () => {
  const programOne = [
    "mov a 5",
    "inc a",
    "dec a",
    "dec a",
    "jnz a -1",
    "inc a",
  ];
  const programTwo = ["mov a -10", "mov b a", "inc a", "dec b", "jnz a -2"];
  expect(simple_assembler(programOne)).toStrictEqual({ a: 1 });
  expect(simple_assembler(programTwo)).toStrictEqual({ a: 0, b: -20 });
});

test("simple_assembler SHALL interpret an array of assmembly instructions", () => {
  const programOne = [
    "mov a 5",
    "inc a",
    "dec a",
    "dec a",
    "jnz a -1",
    "inc a",
  ];
  expect(getLine(1, programOne)).toBe("inc a");
});

test("mov can identify, getArgs and evaluate the assignment of a value a named register", () => {
  const line = "mov a 5";
  const executionContext: ExecutionContext = {
    registers: {},
    lineNumber: 0,
  };

  expect(mov.identify(line)).toBe(true);
  const args = mov.getArgs(line);
  expect(args).toStrictEqual(["a", "5"]);
  const expectedNewExecutionContext: ExecutionContext = {
    registers: { a: 5 },
    lineNumber: 1,
  };
  expect(mov.evaluate(args, executionContext)).toStrictEqual(
    expectedNewExecutionContext,
  );
});

test("mov can identify, getArgs and evaluate the assignment of a value a named register from another register", () => {
  const line = "mov b a";
  const executionContext: ExecutionContext = {
    registers: { a: -10 },
    lineNumber: 0,
  };

  expect(mov.identify(line)).toBe(true);
  const args = mov.getArgs(line);
  expect(args).toStrictEqual(["b", "a"]);
  const expectedNewExecutionContext: ExecutionContext = {
    registers: { a: -10, b: -10 },
    lineNumber: 1,
  };
  expect(mov.evaluate(args, executionContext)).toStrictEqual(
    expectedNewExecutionContext,
  );
});

test("inc can identify, getArgs and evaluate the assignment of a value a named register", () => {
  const line = "inc a";
  const executionContext: ExecutionContext = {
    registers: { a: 0 },
    lineNumber: 0,
  };

  expect(inc.identify(line)).toBe(true);
  const args = inc.getArgs(line);
  expect(args).toStrictEqual(["a"]);
  const expectedNewExecutionContext: ExecutionContext = {
    registers: { a: 1 },
    lineNumber: 1,
  };
  expect(inc.evaluate(args, executionContext)).toStrictEqual(
    expectedNewExecutionContext,
  );
});

test("dec can identify, getArgs and evaluate the assignment of a value a named register", () => {
  const line = "dec a";
  const executionContext: ExecutionContext = {
    registers: { a: 0 },
    lineNumber: 0,
  };

  expect(dec.identify(line)).toBe(true);
  const args = dec.getArgs(line);
  expect(args).toStrictEqual(["a"]);
  const expectedNewExecutionContext: ExecutionContext = {
    registers: { a: -1 },
    lineNumber: 1,
  };
  expect(dec.evaluate(args, executionContext)).toStrictEqual(
    expectedNewExecutionContext,
  );
});

test("jnz can identify, getArgs and evaluate the assignment of a value a named register", () => {
  const line = "jnz a -1";
  const executionContext: ExecutionContext = {
    registers: { a: 1 },
    lineNumber: 10,
  };

  expect(jnz.identify(line)).toBe(true);
  const args = jnz.getArgs(line);
  expect(args).toStrictEqual(["a", "-1"]);
  const expectedNewExecutionContext: ExecutionContext = {
    registers: { a: 1 },
    lineNumber: 9,
  };
  expect(jnz.evaluate(args, executionContext)).toStrictEqual(
    expectedNewExecutionContext,
  );
});

test("jnz can identify, getArgs and evaluate the assignment of a value a named register", () => {
  const line = "jnz a -1";
  const executionContext: ExecutionContext = {
    registers: { a: 0 },
    lineNumber: 10,
  };

  expect(jnz.identify(line)).toBe(true);
  const args = jnz.getArgs(line);
  expect(args).toStrictEqual(["a", "-1"]);
  const expectedNewExecutionContext: ExecutionContext = {
    registers: { a: 0 },
    lineNumber: 11,
  };
  expect(jnz.evaluate(args, executionContext)).toStrictEqual(
    expectedNewExecutionContext,
  );
});
