import { ReactNode, createContext, useMemo, useState } from "react";
import { SHIPS } from "helpers/constants";
import { calculateGameLayout } from "helpers/game";
import { useMountEffect } from "hooks/useMountEffect";
import { GameLayout, Ship } from "models/game";

type GameSignature = {
  ships: Ship[];
  gameLayout: GameLayout;
};

export const GameContext = createContext<Optional<GameSignature>>({
  ships: [],
  gameLayout: []
});

type Props = {
  children: ReactNode;
};

export const GameProvider = ({ children }: Props): JSX.Element => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [gameLayout, setGameLayout] = useState<GameLayout>([]);

  useMountEffect(() => {
    setShips(SHIPS);
    setGameLayout(calculateGameLayout(SHIPS));
  });

  const contextValue = useMemo(() => {
    return {
      ships,
      gameLayout
    };
  }, [ships, gameLayout]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
