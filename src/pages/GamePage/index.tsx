import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import GameGrid from "components/GameGrid";
import GameInfo from "components/GameInfo";
import { LoadingIndicator } from "components/LoadingIndicator";
import { useGameContext } from "context/GameContext/useGameContext";
import { useSnackbar } from "context/SnackbarProvider/useSnackbar";
import { useTranslate } from "hooks/useTranslate";
import { PageWrapper } from "layout/PageWrapper";
import { sxStyles } from "./styles";

const GamePage = () => {
  const classes = sxStyles();
  const { translate } = useTranslate();
  const { isInitializing, reset, hasWon } = useGameContext();
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    if (hasWon) {
      openSnackbar({
        type: "success",
        title: translate("game.win_message", "Congrats! You won!")
      });
    }
  }, [hasWon]);

  return (
    <PageWrapper>
      {isInitializing ? (
        <LoadingIndicator />
      ) : (
        <Grid container columns={4} sx={classes.container}>
          <GameInfo />
          <GameGrid />
        </Grid>
      )}
      <Button onClick={reset}>{translate("game.reset", "Reset")}</Button>
    </PageWrapper>
  );
};

export default GamePage;
