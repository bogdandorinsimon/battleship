import { isEqual } from "lodash";
import { useMemo } from "react";
import { useGameContext } from "context/GameContext/useGameContext";
import { getGridRowAndColumn } from "helpers/components";
import { getShipByPosition } from "helpers/game";
import { CellMode } from "models/components";

export const useCellMode = (cellNumber: number): CellMode => {
  const { hits, missCells } = useGameContext();

  const cell = getGridRowAndColumn(cellNumber);

  return useMemo(() => {
    if (missCells.find((missedCell) => isEqual(missedCell, cell))) {
      return "miss";
    }

    if (getShipByPosition(hits, cell)) {
      return "hit";
    }

    return "not_clicked";
  }, [hits, missCells, cell]);
};
