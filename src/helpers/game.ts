import { Ship, ShipConfig, ShipType } from "models/game";

export const getShipTypeByShip = (ship: Ship): ShipType =>
  Object.keys(ship)[0] as ShipType;

export const getShipConfigByShip = (ship: Ship): ShipConfig =>
  ship[getShipTypeByShip(ship)]!;
