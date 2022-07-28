import countDownFrom from "./count-down";

test("countDownFrom prints out every number down to but excluding 0 and ends eith Blast Off!", () => {
  expect(countDownFrom(3));
  expect(countDownFrom(10));
});

test("countDownFrom can handle negative numbers", () => {
  expect(countDownFrom(-4));
});

test("countDownFrom can handle decimal numbers", () => {
  expect(countDownFrom(10.5));
});
