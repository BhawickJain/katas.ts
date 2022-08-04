import countOccurances from "./count-occurrences";
import countOccurancesReduce from "./count-occurrences-reduce";
import OccuranceDictionary from "./OccurrenceDictionary";

type Implementation = (str: string[]) => OccuranceDictionary;

const implementations: Implementation[] = [
  countOccurances,
  countOccurancesReduce,
];

implementations.forEach((imp) => {
  test(`${imp.name} returns an array of char-count pairs`, () => {
    expect(imp("hello".split(""))).toStrictEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(imp("mississippi".split(""))).toStrictEqual({
      m: 1,
      i: 4,
      s: 4,
      p: 2,
    });
    expect(imp("necessary".split(""))).toStrictEqual({
      n: 1,
      e: 2,
      c: 1,
      s: 2,
      a: 1,
      r: 1,
      y: 1,
    });
    expect(imp("wass'up".split(""))).toStrictEqual({
      w: 1,
      a: 1,
      s: 2,
      "'": 1,
      u: 1,
      p: 1,
    });
    expect(imp("ELLi ELLi ELLi Day".split(/\W/))).toStrictEqual({
      ELLi: 3,
      Day: 1,
    });

    expect(
      imp([
        "the",
        "day",
        "is",
        "sunny",
        "the",
        "the",
        "the",
        "sunny",
        "is",
        "is",
      ]),
    ).toStrictEqual({
      the: 4,
      day: 1,
      is: 3,
      sunny: 2,
    });
  });
});
