# Grid Robot

## To run

Requires [NodeJS](https://nodejs.org/en/) v18.13.0.

To just run the application you can do the following:

```bash
npm start
```

Then enter a grid size when prompted, in the format `x y` where `x` and `y` are positive integers, for example:

```bash
Enter grid size: 4 8
```

Then enter the position and instructions for the robot in the format `(x, y, d) AAAAA` where:
  * `x` and `y` are positive integers within the grid size
  * `d` is one of `N`,`E`,`S`,`W` for north, east, south, west
  * Each `A` is one of `L`, `R`, `F` for left, right, forward

For example:

```bash
Enter robot command: (2, 3, E) LFRFF
```

## Tests

To run the tests requires installing node modules

```bash
npm ci
```

Then the following can be used:

```bash
npm test       # for unit tests
npm run linter # for the linter
```

## Notes

* The application is broken up into four main layers:
    * Entrypoint - `./src/index.js` - executable to start the program
    * Handler - `./src/terminalHandler.js` - interactions between the command line and the application layer
    * Application - `./src/getFinalPosition.js` - primary logic of the program
    * Helpers - `./src/helpers/*` - functions used to assist elsewhere in the program 
* Unit tests are all written using `jest` and are located in the `test` directory
* The [CI pipeline](https://app.circleci.com/pipelines/github/alastair-smith/grid-robot) runs some basic checks including unit tests, linter, and module audit
* Given more time I would:
    * Add tests for the handler and make it clearer, probably extracting some of it out into other functions
    * Add more tests for the user input validation
