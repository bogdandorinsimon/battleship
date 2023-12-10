import { Box, Button, Grid } from "@mui/material";
import HitImage from "assets/png/hit.png";
import MissImage from "assets/png/miss.png";
import { CellMode } from "models/components";
import { sxStyles } from "./styles";

type Props = {
  cellMode: CellMode;
};

const GridCell = ({ cellMode }: Props) => {
  const classes = sxStyles();

  const renderCellContent = () => {
    if (cellMode === "not_clicked") {
      return <Button sx={classes.cellContent} />;
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
      {renderCellContent()}
    </Grid>
  );
};

export default GridCell;
