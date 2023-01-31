module.exports = rawInput => {
  if (!/^\(\d{1,}, \d{1,}, [NESW]\) [FLR]{1,}$/g.test(rawInput)) throw new Error('Invalid commands')

  const [x, y, direction] = rawInput.replace(/(^.*\(|\).*$)/g, '').split(', ')
  const instructions = rawInput.replace(/^.*\) /g, '').split('')

  return {
    position: { x: Number(x), y: Number(y), direction },
    instructions
  }
}
