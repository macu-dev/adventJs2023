const manufacture = require('./day2');


describe('Test in day 2', () => {
  test("Returns an array", () => {
    expect(
      Array.isArray(
        manufacture(['tren', 'oso', 'pelota'], 'tronesa')
      )
    ).toBe(true)
  })

  test("Returns ['tren', 'oso']", () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(expect.arrayContaining(['tren', 'oso']))
  })

  test("Returns ['puzzle']", () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(expect.arrayContaining(['puzzle']))
  })

  test("Returns []", () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual(expect.arrayContaining([]))
  })
});

