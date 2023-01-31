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
