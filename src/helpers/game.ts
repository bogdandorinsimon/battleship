import { isEqual, shuffle } from "lodash";
import {
  Direction,
  GameLayout,
  Ship,
  ShipConfig,
  ShipEntry,
  ShipType
} from "models/game";
import { NO_OF_GRID_COLUMNS, NO_OF_GRID_ROWS } from "./constants";

const DIRECTIONS: Direction[] = ["u", "d", "l", "r"];

export const getShipTypeByShip = (ship: Ship): ShipType =>
  Object.keys(ship)[0] as ShipType;

export const getShipConfigByShip = (ship: Ship): ShipConfig =>
  ship[getShipTypeByShip(ship)]!;

export const getRandomCell = () => {
  const row = Math.floor(Math.random() * 10);
  const column = Math.floor(Math.random() * 10);

  return [row, column];
};

export const getInitialShipEntry = (ship: Ship) => ({
  ship: getShipTypeByShip(ship),
  positions: [getRandomCell()]
});

export const isShipOverlappingBorder = (shipEntry: ShipEntry) =>
  shipEntry.positions.find(
    (position) =>
      position[0] >= NO_OF_GRID_ROWS ||
      position[1] >= NO_OF_GRID_COLUMNS ||
      position[0] < 0 ||
      position[1] < 0
  );

export const getShipByPosition = (
  gameLayout: GameLayout,
  position: number[]
) => {
  return gameLayout.find((layout) =>
    layout.positions.find((pos) => isEqual(pos, position))
  );
};

export const isShipOverlappingOtherShip = (
  shipEntry: ShipEntry,
  gameLayout: GameLayout
) => {
  const positionsArray = [
    ...gameLayout.map((entry) => [...entry.positions])
  ].flat();

  const intersectingPosition = positionsArray.find((position) =>
    shipEntry.positions.find(
      (entry) => entry[0] === position[0] && entry[1] === position[1]
    )
  );

  return intersectingPosition;
};

export const isAValidShipEntry = (
  shipEntry: ShipEntry,
  gameLayout: GameLayout
): boolean =>
  !isShipOverlappingBorder(shipEntry) &&
  !isShipOverlappingOtherShip(shipEntry, gameLayout);

const isACompleteShipEntry = (ship: Ship, shipEntry: ShipEntry) => {
  const shipConfig = getShipConfigByShip(ship);

  return shipEntry.positions.length === shipConfig.size;
};

const incrementShipEntry = (shipEntry: ShipEntry, direction: Direction) => {
  const newPosition: number[] = [
    ...shipEntry.positions[shipEntry.positions.length - 1]
  ];

  switch (direction) {
    case "u":
      newPosition[0]++;
      break;
    case "d":
      newPosition[0]++;
      break;
    case "l":
      newPosition[1]--;
      break;
    case "r":
      newPosition[1]++;
      break;
    default:
  }

  return { ...shipEntry, positions: [...shipEntry.positions, newPosition] };
};

export const calculateShipEntry = (
  ship: Ship,
  shipEntry: ShipEntry,
  directions: Direction[],
  directionIndex: number,
  gameLayout: GameLayout
): ShipEntry => {
  if (directionIndex === directions.length) {
    return calculateShipEntry(
      ship,
      getInitialShipEntry(ship),
      shuffle(DIRECTIONS),
      0,
      gameLayout
    );
  }

  if (!isAValidShipEntry(shipEntry, gameLayout)) {
    return calculateShipEntry(
      ship,
      getInitialShipEntry(ship),
      directions,
      directionIndex + 1,
      gameLayout
    );
  }

  if (isACompleteShipEntry(ship, shipEntry)) {
    return shipEntry;
  }

  return calculateShipEntry(
    ship,
    incrementShipEntry(shipEntry, directions[directionIndex]),
    directions,
    directionIndex,
    gameLayout
  );
};

export const calculateGameLayout = (ships: Ship[]): GameLayout => {
  const gameLayout: GameLayout = [];

  ships.forEach((ship) => {
    const newShipEntry = calculateShipEntry(
      ship,
      getInitialShipEntry(ship),
      shuffle(DIRECTIONS),
      0,
      gameLayout
    );

    gameLayout.push(newShipEntry);
  });

  return gameLayout;
};

export const initializeHits = (ships: Ship[]): GameLayout => {
  return ships.map((ship) => ({
    ship: getShipTypeByShip(ship),
    positions: []
  }));
};
