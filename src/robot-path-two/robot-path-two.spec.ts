import reachesAnyDestination from "./robot-path-two";

// Examples:
test("reachesAnyDestination returns a boolean on whether a destination has been reach", () => {
const destinations = [["e", "n", "e", "e", "n"], ["w", "n", "w", "n", "w", "w", "n"]];
expect(reachesAnyDestination(["s", "e", "e", "n", "n", "e", "n"], destinations)).toBe(true)
expect(reachesAnyDestination(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"], destinations)).toBe(false)
expect(reachesAnyDestination(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"], destinations)).toBe(true)
expect(reachesAnyDestination(["n", "s"], [[]])).toBe(true)
expect(reachesAnyDestination(["n", "s"], [["e"]])).toBe(false)
})