const { describe, expect, test } = require('@jest/globals')
const formatPositionMessage = require('../../src/helpers/formatPositionMessage')
const { ROBOT_LOST_MESSAGE } = require('../../src/constants')

describe('helper formatPositionMessage', () => {
  test('returns position text (4 4 E)', () => {
    expect(formatPositionMessage({ x: 4, y: 4, direction: 'E' }))
      .toEqual('(4, 4, E)')
  })
  test('returns position text (2, 3, W)', () => {
    expect(formatPositionMessage({ x: 2, y: 3, direction: 'W' }))
      .toEqual('(2, 3, W)')
  })
  test('returns position text for out of bounds (0, 4, W) LOST', () => {
    expect(formatPositionMessage({ x: 0, y: 4, direction: 'W', lost: true }))
      .toEqual(`(0, 4, W)${ROBOT_LOST_MESSAGE}`)
  })
  test('returns position text for out of bounds (1, 0, S) LOST', () => {
    expect(formatPositionMessage({ x: 1, y: 0, direction: 'S', lost: true }))
      .toEqual(`(1, 0, S)${ROBOT_LOST_MESSAGE}`)
  })
})
