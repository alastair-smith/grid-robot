const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')
const initIsOutOfBounds = require('./helpers/isOutOfBounds.js')
const initGetFinalPosition = require('./helpers/getFinalPosition')
const getCommandsFromRawInput = require('./helpers/getCommandsFromRawInput')
const getGridSizeFromRawInput = require('./helpers/getGridSizeFromRawInput')

const errorCatching = func => async (...args) => {
  try {
    await func(...args)
  } catch (error) {
    console.error(error)
    console.error('Robot Controller encountered an unexpected error and had to exit')
    process.exit(1)
  }
}

const cmdline = async () => {
  const rl = readline.createInterface({ input, output })
  console.log('Starting Robot Controller (Ctrl+c to exit)\n')

  const rawGridSizeInput = await rl.question('Enter grid size: ')
  let gridSize

  while (!gridSize) {
    try {
      gridSize = getGridSizeFromRawInput(rawGridSizeInput)
    } catch (error) {
      console.log('Invalid input, should be in the format: 12 8')
    }
  }

  const isOutOfBounds = initIsOutOfBounds(gridSize.xMax, gridSize.yMax)
  const getFinalPosition = initGetFinalPosition(isOutOfBounds)

  while (true) {
    const rawUserCommands = await rl.question('Enter robot command: ')

    let userCommands
    try {
      userCommands = getCommandsFromRawInput(rawUserCommands)
    } catch (error) {
      console.log('Invalid input, should be in the format: (2, 3, E) LFRFF')
    }
    const finalPosition = getFinalPosition(userCommands.position, userCommands.instructions)
    console.log(finalPosition)
  }
}

module.exports = errorCatching(cmdline)
