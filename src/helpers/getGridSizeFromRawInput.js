module.exports = rawInput => {
  if (!/^\d* \d* *$/g.test(rawInput)) throw new Error('Invalid grid size')

  const [xMax, yMax] = rawInput.split(' ').map(Number)

  return { xMax, yMax }
}
