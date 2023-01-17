import countDownFrom from "./count-down";

test("countDownFrom prints out every number down to but excluding 0 and ends eith Blast Off!", () => {
  expect(countDownFrom(3)).toStrictEqual(["3!", "2!", "1!", "Blast off!"]);
  expect(countDownFrom(10)).toStrictEqual([
    "10!",
    "9!",
    "8!",
    "7!",
    "6!",
    "5!",
    "4!",
    "3!",
    "2!",
    "1!",
    "Blast off!",
  ]);
});

test("countDownFrom can handle negative numbers", () => {
  expect(countDownFrom(-4)).toStrictEqual(["Blast off!"]);
});

test("countDownFrom can handle decimal numbers", () => {
  expect(countDownFrom(2.5)).toStrictEqual([
    "2.5!",
    "1.5!",
    "0.5!",
    "Blast off!",
  ]);
});
