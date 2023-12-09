import AircraftShapeImage from "assets/aircraft-shape.png";
import BattleshipShapeImage from "assets/battleship-shape.png";
import CarrierShapeImage from "assets/carrier-shape.png";
import CruiserShapeImage from "assets/cruiser-shape.png";
import SubmarineShapeImage from "assets/submarine-shape.png";
import { Ship, ShipEntry } from "models/game";

export const ROUTER_PATH = {
  GAME: "/",
  NOT_FOUND: "*"
};

export const DEFAULT_ROUTE = ROUTER_PATH.GAME;

export const SHIPS: Ship[] = [
  {
    carrier: {
      size: 5,
      count: 1,
      img: CarrierShapeImage
    }
  },
  {
    battleship: {
      size: 4,
      count: 1,
      img: BattleshipShapeImage
    }
  },
  {
    cruiser: {
      size: 3,
      count: 1,
      img: CruiserShapeImage
    }
  },
  {
    submarine: {
      size: 3,
      count: 1,
      img: SubmarineShapeImage
    }
  },
  {
    aircraft: {
      size: 2,
      count: 1,
      img: AircraftShapeImage
    }
  }
];

export const GAME_LAYOUT: ShipEntry[] = [
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
