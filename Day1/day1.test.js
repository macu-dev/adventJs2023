const findFirstRepeated = require('./day1');


describe('Test in day 1', () => {
  test('return a number', () => {
    expect(
      typeof findFirstRepeated([2, 1, 3, 5, 3, 2])
    ).toBe('number')
  })

  test('To be return 3', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toEqual(3)
  })

  test('To be return -1', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toEqual(-1)
  })

  test('To be return 5', () => {
    expect(findFirstRepeated([5, 1, 5, 1])).toEqual(5)
  })
});

