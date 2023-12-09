export type Ship =
  | "carrier"
  | "battleship"
  | "cruiser"
  | "submarine"
  | "destroyer";

export type ShipType = {
  [key in Ship]?: {
    size: number;
    count: number;
  };
};

export type ShipEntry = {
  ship: Ship;
  positions: number[][];
};
