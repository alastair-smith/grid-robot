const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')
const initIsOutOfBounds = require('./helpers/isOutOfBounds.js')
const initGetFinalPosition = require('./getFinalPosition')
const getCommandsFromRawInput = require('./helpers/getCommandsFromRawInput')
const getGridSizeFromRawInput = require('./helpers/getGridSizeFromRawInput')
const formatPositionMessage = require('./helpers/formatPositionMessage')

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

  let gridSize

  while (!gridSize) {
    const rawGridSizeInput = await rl.question('Enter grid size: ')
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
    if (userCommands) {
      if (isOutOfBounds(userCommands.position.x, userCommands.position.y)) {
        console.log(`Invalid input, should be within the grid (${gridSize.xMax}x${gridSize.yMax})`)
      } else {
        const finalPosition = getFinalPosition(userCommands.position, userCommands.instructions)
        const formattedPositionMessage = formatPositionMessage(finalPosition)
        console.log(formattedPositionMessage)
      }
    }
  }
}

module.exports = errorCatching(cmdline)
