export type ShipType =
  | "carrier"
  | "battleship"
  | "cruiser"
  | "submarine"
  | "aircraft";

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
