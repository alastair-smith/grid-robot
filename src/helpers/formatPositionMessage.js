const { ROBOT_LOST_MESSAGE } = require('../constants')

module.exports = position => {
  const lostSuffix = position.lost ? `${ROBOT_LOST_MESSAGE}` : ''
  return `(${position.x}, ${position.y}, ${position.direction})${lostSuffix}`
}
