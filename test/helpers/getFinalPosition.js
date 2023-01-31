const { describe, expect, test } = require('@jest/globals')
const getFinalPosition = require('../../src/helpers/getFinalPosition')
const { DIRECTIONS, INSTRUCTIONS } = require('../../src/constants')

describe('helper getFinalPosition', () => {
  test('returns position when there are no further instructions', () => {
    const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
    const instructions = []
    expect(getFinalPosition(position, instructions)).toEqual(position)
  })

  describe('forwards', () => {
    test('returns position one space further north when facing north and moving forward', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 0, y: 1, direction: DIRECTIONS[0] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position one space further east when facing east and moving forward', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 1, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position one space further south when facing south and moving forward', () => {
      const position = { x: 0, y: 1, direction: DIRECTIONS[2] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[2] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position one space further west when facing east and moving forward', () => {
      const position = { x: 1, y: 0, direction: DIRECTIONS[3] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[3] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing east when facing north and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
  })

  describe('rotations', () => {
    test('returns position facing east when facing north and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing south when facing east and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[2] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing west when facing south and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[2] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[3] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing north when facing west and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[3] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[0] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing west when facing north and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[3] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing south when facing west and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[3] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[2] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing east when facing south and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[2] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing north when facing east and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[0] }
      expect(getFinalPosition(position, instructions)).toEqual(expectedPosition)
    })
  })
})
