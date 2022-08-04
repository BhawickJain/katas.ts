import convertObjectToArray from "./convertObjectToArray";

test("convertObjectToArray returns an array representation of an obejct", () => {
  expect(convertObjectToArray({ l: 2 })).toStrictEqual([["l", 2]]);
});
