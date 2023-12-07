const findNaughtyStep = require('./day3');


describe('Test in day 3', () => {
  test('Returns a String', () => {
    expect(
      typeof findNaughtyStep('abcd', 'abcde')
    ).toBe("string")
  })
  
  test('Return e', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toStrictEqual("e")
  })
  
  test('return o', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toStrictEqual("o")
  })
  
  test('return f', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toStrictEqual("f")
  })
  
  test('return empty', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toStrictEqual("")
  })
});

