import AircraftShapeImage from "assets/png/aircraft-shape.png";
import BattleshipShapeImage from "assets/png/battleship-shape.png";
import CarrierShapeImage from "assets/png/carrier-shape.png";
import CruiserShapeImage from "assets/png/cruiser-shape.png";
import SubmarineShapeImage from "assets/png/submarine-shape.png";
import { Ship } from "models/game";

export const ROUTER_PATH = {
  GAME: "/",
  NOT_FOUND: "*"
};

export const DEFAULT_ROUTE = ROUTER_PATH.GAME;
export const NO_OF_GRID_ROWS = 10;
export const NO_OF_GRID_COLUMNS = 10;

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
