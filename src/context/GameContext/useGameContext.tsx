import { useContext } from "react";
import { GameContext } from "./index";

export const useSnackbar = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return gameContext;
};
