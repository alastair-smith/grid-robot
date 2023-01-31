const INSTRUCTIONS = {
  FORWARD: 'F',
  RIGHT: 'R',
  LEFT: 'L'
}

const ROTATION_DIRECTION = {
  [INSTRUCTIONS.RIGHT]: 1,
  [INSTRUCTIONS.LEFT]: -1
}

const DIRECTIONS = ['N', 'E', 'S', 'W']

const DISPLACMENT_MAPPING = {
  [DIRECTIONS[0]]: { x: 0, y: 1 },
  [DIRECTIONS[1]]: { x: 1, y: 0 },
  [DIRECTIONS[2]]: { x: 0, y: -1 },
  [DIRECTIONS[3]]: { x: -1, y: 0 }
}

module.exports = {
  DIRECTIONS,
  DISPLACMENT_MAPPING,
  ROTATION_DIRECTION,
  INSTRUCTIONS
}
