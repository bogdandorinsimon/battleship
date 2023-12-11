import { Button, Grid, SvgIcon } from "@mui/material";
import { HitIcon, MissIcon } from "assets/svg";
import { useGameContext } from "context/GameContext/useGameContext";
import { getGridRowAndColumn } from "helpers/components";
import { useCellMode } from "hooks/useCellMode";
import { sxStyles } from "./styles";

type Props = {
  cellNumber: number;
};

const GridCell = ({ cellNumber }: Props) => {
  const classes = sxStyles();

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
        sx={classes.icon}
        component={cellMode === "hit" ? HitIcon : MissIcon}
      />
    );
  };
  return (
    <Grid item xs={1} sx={classes.cell}>
      {renderCellContent()}
    </Grid>
  );
};

export default GridCell;
