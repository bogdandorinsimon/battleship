import { ReactNode, createContext, useMemo, useState } from "react";
import { GAME_LAYOUT, SHIPS } from "helpers/constants";
import { useMountEffect } from "hooks/useMountEffect";
import { Ship, ShipEntry } from "models/game";

type GameSignature = {
  ships: Ship[];
  gameLayout: ShipEntry[];
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
  const [gameLayout, setGameLayout] = useState<ShipEntry[]>([]);

  useMountEffect(() => {
    setShips(SHIPS);
    setGameLayout(GAME_LAYOUT);
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
