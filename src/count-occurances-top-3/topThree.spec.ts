import topThreeZero from "./topThree-0";
import topThreeOne from "./topThree-1";

type implementation = (inputString: string) => [string, number][];
const implementations: implementation[] = [topThreeZero, topThreeOne];

implementations.forEach((imp) => {
  test(`${imp.name} returns the top most occurring items in the array`, () => {
    expect(imp("bobby")).toStrictEqual([
      ["b", 3],
      ["o", 1],
      ["y", 1],
    ]);
    expect(imp("ybbob")).toStrictEqual([
      ["b", 3],
      ["y", 1],
      ["o", 1],
    ]);
  });
});
