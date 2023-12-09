import { Grid } from "@mui/material";
import { useRef } from "react";
import GridCell from "components/GridCell";
import { useElementDimensions } from "hooks/useElementDimensions";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { sxStyles } from "./styles";

const NO_OF_GRID_COLUMNS = 10;
const NO_OF_GRID_CELLS = 100;
const GRID_ARRAY = [...Array(NO_OF_GRID_CELLS).keys()];

const GameGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { minSize: minContainerSize } =
    useElementDimensions<HTMLDivElement>(ref);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const classes = sxStyles(minContainerSize);

  return (
    <Grid
      item
      xs={windowWidth < windowHeight ? 4 : 3}
      ref={ref}
      sx={classes.container}
    >
      <Grid container columns={NO_OF_GRID_COLUMNS} sx={classes.grid}>
        {GRID_ARRAY.map((cell) => (
          <GridCell key={cell} />
        ))}
      </Grid>
    </Grid>
  );
};

export default GameGrid;
