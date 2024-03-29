## Getting Started

This project involves designing and implementing a (partial) Battleship game as a web app. The game is single-player, with the computer positioning five ships of various sizes on a 10x10 board. The player's goal is to sink all the computer's ships by firing at board positions.

### Prerequisites

[Node.js](<(https://nodejs.org/en)>) version 12.2.0 or higher and npm installed.

### Install dependencies

```bash
npm i
```

### Build for production:

```bash
npm run build
```

### Run the development server

```bash
npm run dev
```

By default, it should start at http://localhost:8080/

### Run the tests

```bash
npm run test
```

### Linter and Prettier

```bash
npm run lint
npm run format
```

#### Auto-fixing:

```bash
npm run lint:fix
npm run format:fix
```

The capability of auto-fixing depends on the severity of rule(s) violation.

### Storybook

```bash
npm run storybook
```

The Storybook interface is available at http://localhost:6006/.
