import { GuessMark } from "./GuessMark";
import { removeItemAtIndex, wordle } from "./wordle";

test("wordle returns an array of positions marks for a given guess and target word", () => {
  const expectAnswer: GuessMark[] = [
    "MATCH",
    "NOT_PRESENT",
    "BAD_POSITION",
    "NOT_PRESENT",
    "NOT_PRESENT",
  ];
  expect(wordle("Lulls", "level")).toStrictEqual(expectAnswer);
});

test("wordle returns an array of positions marks for a given guess and target word", () => {
  const expectAnswer: GuessMark[] = [
    "BAD_POSITION",
    "BAD_POSITION",
    "NOT_PRESENT",
    "BAD_POSITION",
    "NOT_PRESENT",
  ];
  expect(wordle("world", "clown")).toStrictEqual(expectAnswer);
});

test("removeAtPosition removes item of an array a given position", () => {
    expect(removeItemAtIndex([1, 2, 3], 2)).toStrictEqual([1, 2])
})
