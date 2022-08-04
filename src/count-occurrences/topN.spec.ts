import topN from "./topN";

test("topN returns an array of tuples with top N most frequent words", () => {
  expect(
    topN(
      ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
      3,
    ),
  ).toStrictEqual([
    ["the", 4],
    ["is", 3],
    ["sunny", 2],
  ]);
});
