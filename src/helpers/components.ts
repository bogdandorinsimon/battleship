import { NO_OF_GRID_COLUMNS } from "./constants";

export const getGridRowAndColumn = (cellNumber: number) => {
  const rowIndex = Math.floor(cellNumber / NO_OF_GRID_COLUMNS);
  const colIndex = cellNumber % NO_OF_GRID_COLUMNS;

  return [rowIndex, colIndex];
};
