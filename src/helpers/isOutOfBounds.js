const { GRID_MINIMUMS } = require('../constants')

module.exports = (xMax, yMax) => (x, y) =>
  x < GRID_MINIMUMS.x ||
  x > xMax ||
  y < GRID_MINIMUMS.y ||
  y > yMax
