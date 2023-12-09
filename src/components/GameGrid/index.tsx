import { Grid } from "@mui/material";
import { useRef } from "react";
import GridCell from "components/GridCell";
import { useElementDimensions } from "hooks/useElementDimensions";
import { sxStyles } from "./styles";

const NO_OF_GRID_COLUMNS = 10;
const NO_OF_GRID_CELLS = 100;
const GRID_ARRAY = [...Array(NO_OF_GRID_CELLS).keys()];

const GameGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { minSize } = useElementDimensions<HTMLDivElement>(ref);
  const classes = sxStyles(minSize);

  return (
    <Grid item xs={3} ref={ref} sx={classes.container}>
      <Grid container columns={NO_OF_GRID_COLUMNS} sx={classes.grid}>
        {GRID_ARRAY.map((cell) => (
          <GridCell key={cell} />
        ))}
      </Grid>
    </Grid>
  );
};

export default GameGrid;
