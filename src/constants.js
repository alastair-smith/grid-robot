const INSTRUCTIONS = {
  FORWARD: 'F',
  RIGHT: 'R',
  LEFT: 'L'
}

const ROBOT_LOST_MESSAGE = ' LOST'

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

const GRID_MINIMUMS = { x: 0, y: 0 }

module.exports = {
  DIRECTIONS,
  ROBOT_LOST_MESSAGE,
  DISPLACMENT_MAPPING,
  GRID_MINIMUMS,
  ROTATION_DIRECTION,
  INSTRUCTIONS
}
