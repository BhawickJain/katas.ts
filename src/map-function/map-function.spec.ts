import map from "./map-function";

test("1 -- map return an array with an addOne operation against each element", () => {
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

test("map returns an array of numbers with double the value of each item", () => {
  expect(map([10, 30, 20], (v) => v * 2)).toStrictEqual([20, 60, 40]);
});

test("2 -- map retuns properties of an array of objects", () => {
  const spells = [
    {
      incantation: "Accio",
      effect: "Summons an object",
      type: "Charm",
    },
    {
      incantation: "Aguamenti",
      effect: "Shoots water from wand",
      type: "Charm",
    },
    {
      incantation: "Alohomora",
      effect: "Opens locked objects",
      type: "Charm",
    },
  ];

  function returnIncantation(spell) {
    return spell.incantation;
  }
  function returnType(spell) {
    return spell.type;
  }
  expect(map(spells, returnIncantation)).toStrictEqual([
    "Accio",
    "Aguamenti",
    "Alohomora",
  ]);
  expect(map(spells, returnType)).toStrictEqual(["Charm", "Charm", "Charm"]);
});

test("3 -- map can manpulate strings", () => {
  expect(
    map(["h", "e", "l", "l", "o"], (char) => char.toUpperCase()),
  ).toStrictEqual(["H", "E", "L", "L", "O"]);

  function isVowel(s) {
    return ["a", "e", "i", "o", "u"].includes(s.toLowerCase());
  }

  expect(
    map(["h", "e", "l", "l", "o"], (char) =>
      isVowel(char) ? char.toUpperCase() : char,
    ),
  ).toStrictEqual(["h", "E", "l", "l", "O"]);
});

test("4 -- map can be used to extend the object properties in an array of objects", () => {
  type Details = {
    original: string;
    backwards: string;
  };

  function makeDetails(str: string): Details {
    return {
      original: str,
      backwards: str.split("").reverse().join(""),
    };
  }

  const expectedResult: Details[] = [
    {
      original: "Fola",
      backwards: "aloF",
    },
    {
      original: "Roshni",
      backwards: "inhsoR",
    },
    {
      original: "Soso",
      backwards: "osoS",
    },
  ];

  expect(map(["Fola", "Roshni", "Soso"], makeDetails)).toStrictEqual(
    expectedResult,
  );
});
