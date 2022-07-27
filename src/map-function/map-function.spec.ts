import map from "./map-function";

test("map return an array with an addOne operation against each element", () => {
  const addOne = (num: number): number => num + 1;
  expect(map([1, 1, 1], addOne)).toStrictEqual([2, 2, 2]);
});

test("map return an array with an appendGreeting operation against each element", () => {
  const appendGreenting = (name: string): string => `Hello ${name}`;
  expect(map(["Neill", "Lui", "Sevgi"], appendGreenting)).toStrictEqual([
    "Hello Neill",
    "Hello Lui",
    "Hello Sevgi",
  ]);
});
