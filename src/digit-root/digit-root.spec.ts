import { digitalRoot } from "./digit-root";

test("digitRoot returns the correct digit sum", () => {
  expect(digitalRoot(16)).toBe(7);
  expect(digitalRoot(942)).toBe(6);
  expect(digitalRoot(132189)).toBe(6);
  expect(digitalRoot(493193)).toBe(2);
});
