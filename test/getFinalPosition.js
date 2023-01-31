const { describe, expect, test } = require('@jest/globals')
const getFinalPosition = require('../src/getFinalPosition')
const { DIRECTIONS, INSTRUCTIONS } = require('../src/constants')
const isOutOfBounds = require('../src/helpers/isOutOfBounds')

describe('helper getFinalPosition', () => {
  const isOutOfBoundsFalseStub = (expectedPositionX, expectedPositionY) => (x, y) => {
    if (x === expectedPositionX && y === expectedPositionY) return false
    throw new Error('outOfBounds functions used wrong')
  }
  const isOutOfBoundsTrueStub = (expectedPositionX, expectedPositionY) => (x, y) => {
    if (x === expectedPositionX && y === expectedPositionY) return true
    throw new Error('outOfBounds functions used wrong')
  }

  describe('no instructions', () => {
    test('returns position when there are no further instructions', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = []
      expect(getFinalPosition(isOutOfBoundsFalseStub(position.x, position.y))(position, instructions)).toEqual(position)
    })
  })

  describe('forwards', () => {
    test('returns position one space further north when facing north and moving forward', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 0, y: 1, direction: DIRECTIONS[0] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position one space further east when facing east and moving forward', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 1, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position one space further south when facing south and moving forward', () => {
      const position = { x: 0, y: 1, direction: DIRECTIONS[2] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[2] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position one space further west when facing east and moving forward', () => {
      const position = { x: 1, y: 0, direction: DIRECTIONS[3] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[3] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing east when facing north and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
  })

  describe('rotations', () => {
    test('returns position facing east when facing north and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing south when facing east and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[2] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing west when facing south and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[2] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[3] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing north when facing west and turning right', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[3] }
      const instructions = [INSTRUCTIONS.RIGHT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[0] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing west when facing north and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[0] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[3] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing south when facing west and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[3] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[2] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing east when facing south and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[2] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[1] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
    test('returns position facing north when facing east and turning left', () => {
      const position = { x: 0, y: 0, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.LEFT]

      const expectedPosition = { x: 0, y: 0, direction: DIRECTIONS[0] }
      expect(getFinalPosition(isOutOfBoundsFalseStub(expectedPosition.x, expectedPosition.y))(position, instructions)).toEqual(expectedPosition)
    })
  })

  describe('out of bounds', () => {
    test('returns the current position with the lost property when the instructions lead the robot out of bounds', () => {
      const position = { x: 10, y: 8, direction: DIRECTIONS[1] }
      const instructions = [INSTRUCTIONS.FORWARD]

      const expectedPosition = { x: 10, y: 8, direction: DIRECTIONS[1], lost: true }
      expect(getFinalPosition(isOutOfBoundsTrueStub(11, position.y))(position, instructions)).toEqual(expectedPosition)
    })
  })

  describe('series of instructions', () => {
    test('(2, 3, E) LFRFF within range', () => {
      const position = { x: 2, y: 3, direction: DIRECTIONS[1] }
      const instructions = [
        INSTRUCTIONS.LEFT,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.RIGHT,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.FORWARD
      ]

      const expectedPosition = { x: 4, y: 4, direction: DIRECTIONS[1] }
      expect(getFinalPosition(isOutOfBounds(4, 8))(position, instructions)).toEqual(expectedPosition)
    })
    test('(0, 2, N) FFLFRFF outside range', () => {
      const position = { x: 0, y: 2, direction: DIRECTIONS[0] }
      const instructions = [
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.LEFT,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.RIGHT,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.FORWARD
      ]

      const expectedPosition = { x: 0, y: 4, direction: DIRECTIONS[3], lost: true }
      expect(getFinalPosition(isOutOfBounds(4, 8))(position, instructions)).toEqual(expectedPosition)
    })
    test('(2, 3, N) FLLFR within range', () => {
      const position = { x: 2, y: 3, direction: DIRECTIONS[0] }
      const instructions = [
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.LEFT,
        INSTRUCTIONS.LEFT,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.RIGHT
      ]

      const expectedPosition = { x: 2, y: 3, direction: DIRECTIONS[3] }
      expect(getFinalPosition(isOutOfBounds(4, 8))(position, instructions)).toEqual(expectedPosition)
    })
    test('(1, 0, S) FFRLF outside range', () => {
      const position = { x: 1, y: 0, direction: DIRECTIONS[2] }
      const instructions = [
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.FORWARD,
        INSTRUCTIONS.RIGHT,
        INSTRUCTIONS.LEFT,
        INSTRUCTIONS.FORWARD
      ]

      const expectedPosition = { x: 1, y: 0, direction: DIRECTIONS[2], lost: true }
      expect(getFinalPosition(isOutOfBounds(4, 8))(position, instructions)).toEqual(expectedPosition)
    })
  })
})
