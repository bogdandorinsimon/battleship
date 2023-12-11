import { Button, Grid, SvgIcon } from "@mui/material";
import { useRef } from "react";
import { HitIcon, MissIcon } from "assets/svg";
import { useGameContext } from "context/GameContext/useGameContext";
import { getGridRowAndColumn } from "helpers/components";
import { useCellMode } from "hooks/useCellMode";
import { useElementDimensions } from "hooks/useElementDimensions";
import { sxStyles } from "./styles";

type Props = {
  cellNumber: number;
};

const GridCell = ({ cellNumber }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { minSize: cellSize } = useElementDimensions<HTMLDivElement>(ref);
  const classes = sxStyles(cellSize);

  const { handleCellClick } = useGameContext();
  const cellMode = useCellMode(cellNumber);

  const handleClick = () => {
    const cell = getGridRowAndColumn(cellNumber);
    handleCellClick(cell);
  };

  const renderCellContent = () => {
    if (cellMode === "not_clicked") {
      return <Button sx={classes.button} onClick={handleClick} />;
    }

    return (
      <SvgIcon
        sx={classes.cellContent}
        component={cellMode === "hit" ? HitIcon : MissIcon}
      />
    );
  };
  return (
    <Grid ref={ref} item xs={1} sx={classes.cell}>
      {renderCellContent()}
    </Grid>
  );
};

export default GridCell;
