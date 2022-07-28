import repeat from "./repeat-high-order";

test("repeat calls a function a certain specified number of times", () => {
  const print = jest.fn(() => console.log("Hello"));
  repeat(5, print);
  expect(print).toBeCalledTimes(5);
});

test("repeat calls a function a certain specified number of times", () => {
  const pi = jest.fn(() => 3.14);
  repeat(5, pi);
  expect(pi).toBeCalledTimes(5);
});
