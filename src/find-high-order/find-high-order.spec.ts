import { find } from "./find-high-order";

test("find returns the first item that matches predicate function in an array of numbers", () => {
  expect(find([1, 2, 3, 4], (num) => num === 3)).toBe(3);
  expect(find([1, 2, 3, 4], (num) => num * num > 4)).toBe(3);
});

test("find returns undefined when none of the items are true according to a predicate function", () => {
  expect(find([1, 2, 3, 4], (num) => num === 9)).toBe(undefined);
  expect(find([1, 2, 3, 4], (num) => num * num > 16)).toBe(undefined);
});

test("find can handle custom typed arrays", () => {
  // setup

  interface Person {
    name: string;
    age: number;
  }

  const people: Person[] = [
    {
      name: "bhawick",
      age: 27,
    },
    {
      name: "temi",
      age: 25,
    },
    {
      name: "laura",
      age: 24,
    },
  ];

  const shortName = (person: Person): boolean => person.name.length < 5;

  // act and assert
  expect(find(people, shortName)).toStrictEqual({
    name: "temi",
    age: 25,
  });
  expect(find(people, (per) => false)).toStrictEqual(undefined);
});
