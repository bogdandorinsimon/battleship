import { describe, expect, it } from "vitest";
import { getGridRowAndColumn } from "./components";

describe("getGridRowAndColumn", () => {
  it("should return the correct row and column indices", () => {
    const innerCellNumber = 42;
    const [innerRow, innerColumn] = getGridRowAndColumn(innerCellNumber);
    expect(innerRow).toBe(4);
    expect(innerColumn).toBe(2);

    const topLeftCellNumber = 0;
    const [topLeftRow, topLeftColumn] = getGridRowAndColumn(topLeftCellNumber);
    expect(topLeftRow).toBe(0);
    expect(topLeftColumn).toBe(0);

    const bottomRightCellNumber = 99;
    const [bottomRightRow, bottomRightColumn] = getGridRowAndColumn(
      bottomRightCellNumber
    );
    expect(bottomRightRow).toBe(9);
    expect(bottomRightColumn).toBe(9);
  });
});
