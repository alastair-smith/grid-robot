const { describe, expect, test } = require('@jest/globals')
const positiveModulo = require('../../src/helpers/positiveModulo')

describe('helper positiveModulo', () => {
  test('0mod4 = 0', () => {
    expect(positiveModulo(0, 4)).toEqual(0)
  })
  test('1mod4 = 1', () => {
    expect(positiveModulo(1, 4)).toEqual(1)
  })
  test('2mod4 = 2', () => {
    expect(positiveModulo(2, 4)).toEqual(2)
  })
  test('3mod4 = 3', () => {
    expect(positiveModulo(3, 4)).toEqual(3)
  })
  test('4mod4 = 0', () => {
    expect(positiveModulo(4, 4)).toEqual(0)
  })
  test('-1mod4 = 3', () => {
    expect(positiveModulo(-1, 4)).toEqual(3)
  })
  test('5mod4 = 1', () => {
    expect(positiveModulo(5, 4)).toEqual(1)
  })
})
