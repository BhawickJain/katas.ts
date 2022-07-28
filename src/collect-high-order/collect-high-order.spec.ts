import collect from "./collect-high-order";

test("collect return a collection of start definitions repeatedly", () => {
  function createStar() {
    return {
      pos: { x: Math.random(), y: Math.random() },
      speed: Math.random(),
    };
  }

  expect(collect(1000, createStar)).toHaveLength(1000);
});
