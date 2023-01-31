const { DIRECTIONS, DISPLACMENT_MAPPING, INSTRUCTIONS, ROTATION_DIRECTION } = require('./constants')
const positiveModulo = require('./helpers/positiveModulo')

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

module.exports = isOutOfBounds => {
  const getFinalPosition = (position, instructions) => {
    if (!instructions.length) return position

    const newPosition = instructions[0] === INSTRUCTIONS.FORWARD
      ? moveForwards(position)
      : rotate(position, instructions[0])

    if (isOutOfBounds(newPosition.x, newPosition.y)) return { ...position, lost: true }

    return getFinalPosition(newPosition, instructions.slice(1))
  }
  return getFinalPosition
}
