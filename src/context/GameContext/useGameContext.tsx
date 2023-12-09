import { useContext } from "react";
import { GameContext } from "./index";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return gameContext;
};
