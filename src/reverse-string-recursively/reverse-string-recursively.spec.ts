import reverseStringA from "./reverse-string-recursively-a";
import reverseStringB from "./reverse-string-recursively-b";


const implementations: ((inputString: string) => string)[] = [
    reverseStringA,
    reverseStringB

]

implementations.map((imp) => {
test(`${imp.name} returns a string in reverse using recursion`, () => {
  expect(imp("abc")).toBe("cba");
  expect(imp("this is a brilliant idea")).toBe("aedi tnaillirb a si siht");
});
})
