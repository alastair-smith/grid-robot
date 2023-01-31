module.exports = position => {
  const lostSuffix = position.lost ? ' LOST' : ''
  return `(${position.x}, ${position.y}, ${position.direction})${lostSuffix}`
}
