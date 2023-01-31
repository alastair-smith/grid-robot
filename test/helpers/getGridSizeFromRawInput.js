const { describe, expect, test } = require('@jest/globals')
const getGridSizeFromRawInput = require('../../src/helpers/getGridSizeFromRawInput')

describe('helper getGridSizeFromRawInput', () => {
  test('return grid size for valid input single digits "4 8"', () => {
    expect(getGridSizeFromRawInput('4 8')).toEqual({ xMax: 4, yMax: 8})
  })
  test('return grid size for valid input multiple digits "14 8"', () => {
    expect(getGridSizeFromRawInput('14 8')).toEqual({ xMax: 14, yMax: 8})
  })
  test('return grid size for valid input multiple digits "14 800"', () => {
    expect(getGridSizeFromRawInput('14 800')).toEqual({ xMax: 14, yMax: 800})
  })
  test('ignore trailing spaces', () => {
    expect(getGridSizeFromRawInput('14 800    ')).toEqual({ xMax: 14, yMax: 800})
  })
  test('throw errors for non-numbers', () => {
    expect(() => getGridSizeFromRawInput('ab1 123')).toThrow()
  })
  test('throw errors for too many numbers', () => {
    expect(() => getGridSizeFromRawInput('123 123 13')).toThrow()
  })
  test('throw errors for not enough numbers', () => {
    expect(() => getGridSizeFromRawInput('123')).toThrow()
  })
  test('throw errors for empty input', () => {
    expect(() => getGridSizeFromRawInput('')).toThrow()
  })
})