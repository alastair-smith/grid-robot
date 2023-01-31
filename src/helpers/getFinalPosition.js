const { DIRECTIONS, DISPLACMENT_MAPPING, INSTRUCTIONS, ROTATION_DIRECTION } = require('../constants')
const positiveModulo = require('./positiveModulo')

const moveForwards = position => {
  const displacement = DISPLACMENT_MAPPING[position.direction]

  return {
    ...position,
    x: position.x + displacement.x,
    y: position.y + displacement.y
  }
}

const rotate = (position, rotationDirection) => {
  const currentDirectionIndex = DIRECTIONS.findIndex(direction => direction === position.direction)
  const rotationNumber = ROTATION_DIRECTION[rotationDirection]
  const newDirectionIndex = positiveModulo(currentDirectionIndex + rotationNumber, DIRECTIONS.length)
  const newDirection = DIRECTIONS[newDirectionIndex]

  return { ...position, direction: newDirection }
}

module.exports = (position, instructions) => {
  if (!instructions.length) return position

  if (instructions[0] === INSTRUCTIONS.FORWARD) return moveForwards(position)
  else return rotate(position, instructions[0])
}