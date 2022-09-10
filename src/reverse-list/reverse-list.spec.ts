test("reverse-list can reverse order of items in a list for a range of types", () => {
    expect(returnReverseList(['Hello', 'World'])).toBe(['World', 'Hello'])
    expect(returnReverseList(['Hello World'])).toBe(['Hello World'])
    expect(returnReverseList(['Hello World', 1])).toBe([1, 'Hello World'])
    expect(returnReverseList([])).toBe([])
    expect(returnReverseList([undefined, undefined])).toBe([undefined, undefined])
})
