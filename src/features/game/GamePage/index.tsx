import { Grid } from "@mui/material";
import GameGrid from "components/GameGrid";
import GameInfo from "components/GameInfo";
import { PageWrapper } from "layout/PageWrapper";
import { sxStyles } from "./styles";

const GamePage = () => {
  const classes = sxStyles();

  return (
    <PageWrapper>
      <Grid container columns={4} sx={classes.container}>
        <GameInfo />
        <GameGrid />
      </Grid>
    </PageWrapper>
  );
};

export default GamePage;
