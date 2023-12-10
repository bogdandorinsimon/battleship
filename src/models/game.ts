export type ShipType =
  | "carrier"
  | "battleship"
  | "cruiser"
  | "submarine"
  | "aircraft";

export type Direction = "u" | "d" | "l" | "r";

export type ShipConfig = {
  size: number;
  count: number;
  img: string;
};
export type Ship = {
  [key in ShipType]?: ShipConfig;
};

export type ShipEntry = {
  ship: ShipType;
  positions: number[][];
};

export type GameLayout = ShipEntry[];
