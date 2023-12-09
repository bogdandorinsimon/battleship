import { Button, Grid } from "@mui/material";
import { sxStyles } from "./styles";

const GridCell = () => {
  const classes = sxStyles();

  return (
    <Grid item xs={1} sx={classes.cell}>
      <Button sx={{ display: "flex", width: "100%", height: "100%" }} />
    </Grid>
  );
};

export default GridCell;
