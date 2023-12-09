import { Button, Grid } from "@mui/material";
import { sxStyles } from "./styles";

const GridCell = () => {
  const classes = sxStyles();

  return (
    <Grid item xs={1} sx={classes.cell}>
      <Button sx={classes.button} />
    </Grid>
  );
};

export default GridCell;
