const { describe, expect, test } = require('@jest/globals')
const isOutOfBounds = require('../../src/helpers/isOutOfBounds')

describe('helper isOutOfBounds', () => {
  test('returns false if within x and y bounds', () => {
    const xMax = 10
    const yMax = 5
    const x = 3
    const y = 2
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(false)
  })
  test('returns false if on upper border of x bound and is within y range', () => {
    const xMax = 10
    const yMax = 5
    const x = xMax
    const y = 2
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(false)
  })
  test('returns false if on upper border of y bound and is within x range', () => {
    const xMax = 10
    const yMax = 5
    const x = 3
    const y = yMax
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(false)
  })
  test('returns false if on lower border of x bound and is within y range', () => {
    const xMax = 10
    const yMax = 5
    const x = 0
    const y = 2
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(false)
  })
  test('returns false if on lower border of y bound and is within x range', () => {
    const xMax = 10
    const yMax = 5
    const x = 3
    const y = 0
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(false)
  })
  test('returns true if above x max', () => {
    const xMax = 10
    const yMax = 5
    const x = 11
    const y = 2
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(true)
  })
  test('returns true if above y max', () => {
    const xMax = 10
    const yMax = 5
    const x = 3
    const y = 6
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(true)
  })
  test('returns true if below x min', () => {
    const xMax = 10
    const yMax = 5
    const x = -1
    const y = 2
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(true)
  })
  test('returns true if above y min', () => {
    const xMax = 10
    const yMax = 5
    const x = 3
    const y = -1
    expect(isOutOfBounds(xMax, yMax)(x, y)).toEqual(true)
  })
})
