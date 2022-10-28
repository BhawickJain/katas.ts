import { simple_assembler } from "./simple-assembler-interpreter"

test("simple_assembler SHALL interpret an array of assmembly instructions", () => {
	const programOne = [
		"mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"
	]
	expect(simple_assembler(programOne)).toBe({a: 1})
})