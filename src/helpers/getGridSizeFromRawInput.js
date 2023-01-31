module.exports = rawInput => {
  if (!/^\d{1,} \d{1,} *$/g.test(rawInput)) throw new Error('Invalid grid size')

  const [xMax, yMax] = rawInput.split(' ').map(Number)

  return { xMax, yMax }
}
