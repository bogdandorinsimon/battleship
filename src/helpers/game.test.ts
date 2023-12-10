import { describe, expect, it } from "vitest";
import { GameLayout } from "models/game";
import { NO_OF_GRID_COLUMNS, NO_OF_GRID_ROWS, SHIPS } from "./constants";
import {
  calculateGameLayout,
  getRandomCell,
  getShipByPosition,
  isShipOverlappingBorder,
  isShipOverlappingOtherShip
} from "./game";
import { INVALID_GAME_LAYOUT, SHIP_ENTRY, VALID_GAME_LAYOUT } from "./mock";

describe("getRandomCell", () => {
  it("should return a valid cell", () => {
    const cell = getRandomCell();

    expect(Array.isArray(cell)).toBe(true);
    expect(cell.length).toBe(2);

    const [row, column] = cell;
    expect(row).toBeGreaterThanOrEqual(0);
    expect(row).toBeLessThan(10);
    expect(column).toBeGreaterThanOrEqual(0);
    expect(column).toBeLessThan(10);
  });
});

describe("isShipOverlappingBorder", () => {
  it("should return true if ship is overlapping the border", () => {
    expect(isShipOverlappingBorder(INVALID_GAME_LAYOUT[0])).toBeTruthy();
  });

  it("should return false if ship is not overlapping the border", () => {
    expect(isShipOverlappingBorder(VALID_GAME_LAYOUT[0])).toBeFalsy();
  });
});

describe("getShipByPosition", () => {
  it("should return the correct ship when position corresponds to a cell with a ship", () => {
    const shipWithPosition = getShipByPosition(
      VALID_GAME_LAYOUT,
      VALID_GAME_LAYOUT[0].positions[0]
    );
    expect(shipWithPosition).toEqual(VALID_GAME_LAYOUT[0]);
  });

  it("should return undefined when position does not correspond to any ship", () => {
    const shipWithoutPosition = getShipByPosition(VALID_GAME_LAYOUT, [-1, -1]);
    expect(shipWithoutPosition).toBeUndefined();
  });
});

describe("isShipOverlappingOtherShip", () => {
  it("should return the intersecting position when ship is overlapping other ships", () => {
    const intersectingPosition = isShipOverlappingOtherShip(
      VALID_GAME_LAYOUT[0],
      VALID_GAME_LAYOUT
    );
    expect(intersectingPosition).toEqual([2, 9]);
  });

  it("should return undefined when ship is not overlapping other ships", () => {
    const nonOverlappingPosition = isShipOverlappingOtherShip(
      SHIP_ENTRY,
      VALID_GAME_LAYOUT
    );
    expect(nonOverlappingPosition).toBeUndefined();
  });
});

describe("calculateGameLayout", () => {
  it("should generate a valid game layout", () => {
    const gameLayout: GameLayout = calculateGameLayout(SHIPS);

    gameLayout.forEach((shipEntry, index) => {
      shipEntry.positions.forEach((position) => {
        const [row, column] = position;
        expect(row >= 0 && row < NO_OF_GRID_ROWS).toBeTruthy();
        expect(column >= 0 && column < NO_OF_GRID_COLUMNS).toBeTruthy();
      });

      if (index > 0) {
        const overlappingPosition = isShipOverlappingOtherShip(
          shipEntry,
          gameLayout.slice(0, index)
        );
        expect(overlappingPosition).toBeUndefined();
      }
    });
  });
});
