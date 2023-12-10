import { Grid } from "@mui/material";
import { isEqual } from "lodash";
import { useRef } from "react";
import GridCell from "components/GridCell";
import { useGameContext } from "context/GameContext/useGameContext";
import { getGridRowAndColumn } from "helpers/components";
import { NO_OF_GRID_COLUMNS, NO_OF_GRID_ROWS } from "helpers/constants";
import { useElementDimensions } from "hooks/useElementDimensions";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { sxStyles } from "./styles";

const NO_OF_GRID_CELLS = NO_OF_GRID_COLUMNS * NO_OF_GRID_ROWS;
const GRID_ARRAY = [...Array(NO_OF_GRID_CELLS).keys()];

const GameGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { minSize: minContainerSize } =
    useElementDimensions<HTMLDivElement>(ref);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const classes = sxStyles(minContainerSize);

  const { gameLayout } = useGameContext();

  return (
    <Grid
      item
      xs={windowWidth < windowHeight ? 4 : 3}
      ref={ref}
      sx={classes.container}
    >
      <Grid container columns={NO_OF_GRID_COLUMNS} sx={classes.grid}>
        {GRID_ARRAY.map((cell) => (
          <GridCell
            key={cell}
            cellMode={
              gameLayout.find((entry) =>
                entry.positions.find((position) =>
                  isEqual(position, getGridRowAndColumn(cell))
                )
              )
                ? "hit"
                : "miss"
            }
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default GameGrid;
