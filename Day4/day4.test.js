const decode = require('./day4')

describe('Test in day 4', () => {
  test('Returns a String', () => {
    expect(
      typeof decode('hola (odnum)')
    ).toBe('string')
  })
  
  test('Return hola mundo' , () => {
    expect(decode('hola (odnum)')).toStrictEqual('hola mundo')
  })
  
  test('hello world!' , () => {
    expect(decode('(olleh) (dlrow)!')).toStrictEqual('hello world!')
  })
  
  test('santaclaus' , () => {
    expect(decode('sa(u(cla)atn)s')).toStrictEqual('santaclaus')
  })
  
  test('santa' , () => {
    expect(decode('((nta)(sa))')).toStrictEqual('santa')
  })

})
