import { continueStatement, inheritsComments } from "@babel/types";
import { getWidthLimitedColumnsArray } from "console-table-printer/dist/src/utils/table-helpers";

export type Program = string[]
export type Registers = Record<string, number>
export type Arguments = Record<string, number>
export type LineNumber = number;
export interface ExecutionContext {
	registers: Registers,
	lineNumber: LineNumber
}
export interface Operation {
	identify: (token: string) => boolean;
	getArgs: (token: string) => Arguments;
	evaluate: (args: Arguments, context: ExecutionContext) => ExecutionContext
}

export type OperationList = Record<string, Operation>

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
export function simple_assembler(program: Program): Registers {
	const executionContext = {
		registers: {},
		lineNumber: 0
	}


	while (executionContext.lineNumber < program.length) {
		const line: string = getLine(executionContext.lineNumber, program)
		const operation: Operation | null = detectOperation(operations, line)
		if (operation) {
		const args = operation.getArgs(line)
		const newExecutionContext: ExecutionContext = operation.evaluate(args, executionContext)
		executionContext["registers"] = {...newExecutionContext.registers}

		// TODO GOTO
		executionContext.lineNumber = newExecutionContext.lineNumber
		executionContext["lineNumber"] = newExecutionContext.lineNumber
		} else {
			console.error("Error Occured", executionContext)
		}
	}
	

	/* return a dictionary with the registers */
	return executionContext.registers
}

export function getLine(lineNumber: LineNumber, program: Program): string {
	return program[lineNumber]
}

export function detectOperation(operationList: OperationList, line: string): Operation | null {
	for (const operationKey in operationList) {
		const operation: Operation = operationList[operationKey]
		const detectionResult: boolean = operation.identify(line)
		if (detectionResult) {
			return operation
		}
	}
	return null
}

	const operations: OperationList = {
		"mov": mov,
		"inc": inc,
		"dec": dec,
		"jnz": jnz,
	}

	export const mov: Operation = {
		identify: (token: string) => true, 
		getArgs: (token: string) => ({}), 
		evaluate: (args: Arguments, context: ExecutionContext) => ({registers: {}, lineNumber: 0})
	}