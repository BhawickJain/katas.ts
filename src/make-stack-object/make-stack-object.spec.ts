import { createStack } from "./make-stack-object";

test("SHALL have normal error free usage", () => {
  const myStack = createStack();
  expect(myStack.push(10)).toBe(1);
  expect(myStack.push(20)).toBe(2);
  expect(myStack.pop()).toBe(20);
  expect(myStack.push(30)).toBe(2);
  expect(myStack.push(40)).toBe(3);
  expect(myStack.isEmpty()).toBe(false);
  while (!myStack.isEmpty()) {
    const el = myStack.pop();
    console.log(el);
  }
  expect(myStack.isEmpty()).toBe(true);
});

test.skip("SHALL NOT access underlying array methods", () => {
  const myStack = createStack();
  expect(myStack.push(10)).toBe(1);
  expect(myStack.push(20)).toBe(2);
});
