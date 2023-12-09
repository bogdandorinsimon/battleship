import { ReactNode, createContext, useMemo, useState } from "react";
import { GAME_LAYOUT, SHIP_TYPES } from "helpers/constants";
import { useMountEffect } from "hooks/useMountEffect";
import { ShipEntry, ShipType } from "models/game";

type GameSignature = {
  shipTypes: ShipType[];
  gameLayout: ShipEntry[];
};

export const GameContext = createContext<Optional<GameSignature>>({
  shipTypes: [],
  gameLayout: []
});

type Props = {
  children: ReactNode;
};

export const GameProvider = ({ children }: Props): JSX.Element => {
  const [shipTypes, setShipTypes] = useState<ShipType[]>([]);
  const [gameLayout, setGameLayout] = useState<ShipEntry[]>([]);

  useMountEffect(() => {
    setShipTypes(SHIP_TYPES);
    setGameLayout(GAME_LAYOUT);
  });

  const contextValue = useMemo(() => {
    return {
      shipTypes,
      gameLayout
    };
  }, [shipTypes, gameLayout]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
