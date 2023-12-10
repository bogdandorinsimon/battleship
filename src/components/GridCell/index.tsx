import { Box, Button, Grid } from "@mui/material";
import HitImage from "assets/png/hit.png";
import MissImage from "assets/png/miss.png";
import { useGameContext } from "context/GameContext/useGameContext";
import { getGridRowAndColumn } from "helpers/components";
import { useCellMode } from "hooks/useCellMode";
import { sxStyles } from "./styles";

type Props = {
  cellNumber: number;
};

const GridCell = ({ cellNumber }: Props) => {
  const { handleCellClick } = useGameContext();
  const cellMode = useCellMode(cellNumber);
  const classes = sxStyles();

  const handleClick = () => {
    const cell = getGridRowAndColumn(cellNumber);
    handleCellClick(cell);
  };

  const renderCellContent = () => {
    if (cellMode === "not_clicked") {
      return <Button sx={classes.cellContent} onClick={handleClick} />;
    }

    return (
      <Box
        sx={classes.cellContent}
        component="img"
        src={cellMode === "hit" ? HitImage : MissImage}
      />
    );
  };
  return (
    <Grid item xs={1} sx={classes.cell}>
      <Box sx={{ width: "100%", height: "100%" }}>{renderCellContent()}</Box>
    </Grid>
  );
};

export default GridCell;
