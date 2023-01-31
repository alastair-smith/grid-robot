const { describe, expect, test } = require('@jest/globals')
const getCommandsFromRawInput = require('../../src/helpers/getCommandsFromRawInput')
const { DIRECTIONS, INSTRUCTIONS } = require('../../src/constants')

describe('helper getCommandsFromRawInput', () => {
  test('returns the position and instructions from valid input (2, 3, E) LFRFF', () => {
    expect(getCommandsFromRawInput('(2, 3, E) LFRFF'))
      .toEqual({
        position: { x: 2, y: 3, direction: DIRECTIONS[1] },
        instructions: [
          INSTRUCTIONS.LEFT,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.RIGHT,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.FORWARD
        ]
      })
  })
  test('returns the position and instructions from valid input (0, 2, N) FFLFRFF', () => {
    expect(getCommandsFromRawInput('(0, 2, N) FFLFRFF'))
      .toEqual({
        position: { x: 0, y: 2, direction: DIRECTIONS[0] },
        instructions: [
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.LEFT,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.RIGHT,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.FORWARD
        ]
      })
  })
  test('returns the position and instructions from valid input (10, 200, N) FFLFRFF', () => {
    expect(getCommandsFromRawInput('(10, 200, N) FFLFRFF'))
      .toEqual({
        position: { x: 10, y: 200, direction: DIRECTIONS[0] },
        instructions: [
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.LEFT,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.RIGHT,
          INSTRUCTIONS.FORWARD,
          INSTRUCTIONS.FORWARD
        ]
      })
  })
  test('throws an error if missing brackets', () => {
    expect(() => getCommandsFromRawInput('10, 20, N FFL')).toThrow()
  })
  test('throws an error if missing value', () => {
    expect(() => getCommandsFromRawInput('(10, , N) FFLFRFF')).toThrow()
  })
  test('throws an error if missing instructions', () => {
    expect(() => getCommandsFromRawInput('(10, 20, N)')).toThrow()
  })
})
