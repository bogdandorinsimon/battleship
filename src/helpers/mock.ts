import { GameLayout, ShipEntry } from "models/game";

export const SHIP_ENTRY: ShipEntry = {
  ship: "aircraft",
  positions: [
    [7, 1],
    [7, 2]
  ]
};

export const VALID_GAME_LAYOUT: GameLayout = [
  {
    ship: "carrier",
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9]
    ]
  },
  {
    ship: "battleship",
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5]
    ]
  },
  {
    ship: "cruiser",
    positions: [
      [8, 1],
      [8, 2],
      [8, 3]
    ]
  },
  {
    ship: "submarine",
    positions: [
      [3, 0],
      [3, 1],
      [3, 2]
    ]
  },
  {
    ship: "aircraft",
    positions: [
      [0, 0],
      [1, 0]
    ]
  }
];

export const INVALID_GAME_LAYOUT: GameLayout = [
  {
    ship: "carrier",
    positions: [
      [-1, 2],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9]
    ]
  },
  {
    ship: "battleship",
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5]
    ]
  },
  {
    ship: "cruiser",
    positions: [
      [8, 1],
      [8, 2],
      [8, 3]
    ]
  },
  {
    ship: "submarine",
    positions: [
      [5, 2],
      [6, 2],
      [7, 2]
    ]
  },
  {
    ship: "aircraft",
    positions: [
      [0, 0],
      [1, 0]
    ]
  }
];
