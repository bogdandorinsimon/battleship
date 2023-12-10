import { ReactNode, createContext, useMemo, useState } from "react";
import { SHIPS } from "helpers/constants";
import {
  calculateGameLayout,
  getShipByPosition,
  getShipConfigByShip,
  getShipTypeByShip,
  initializeHits
} from "helpers/game";
import { useMountEffect } from "hooks/useMountEffect";
import { GameLayout, Ship } from "models/game";

type GameSignature = {
  isInitializing: boolean;
  ships: Ship[];
  hits: GameLayout;
  missCells: number[][];
  hasWon: boolean;
  isShipSunk: (ship: Ship) => boolean;
  handleCellClick: (cell: number[]) => void;
  reset: () => void;
};

export const GameContext = createContext<Optional<GameSignature>>({
  isInitializing: false,
  ships: [],
  hits: [],
  missCells: [],
  hasWon: false,
  isShipSunk: () => false,
  handleCellClick: () => {},
  reset: () => {}
});

type Props = {
  children: ReactNode;
};

export const GameProvider = ({ children }: Props): JSX.Element => {
  const [isInitializing, setIsInitializing] = useState(false);
  const [ships, setShips] = useState<Ship[]>([]);
  const [gameLayout, setGameLayout] = useState<GameLayout>([]);
  const [hits, setHits] = useState<GameLayout>([]);
  const [missCells, setMissCells] = useState<number[][]>([]);

  const initializeGame = () => {
    setIsInitializing(true);

    setShips(SHIPS);
    setGameLayout(calculateGameLayout(SHIPS));
    setHits(initializeHits(SHIPS));
    setMissCells([]);

    setIsInitializing(false);
  };

  useMountEffect(() => initializeGame);

  const handleCellClick = (cell: number[]) => {
    const clickedShip = getShipByPosition(gameLayout, cell);

    if (clickedShip) {
      setHits(
        hits.map((hit) =>
          hit.ship === clickedShip?.ship
            ? { ...hit, positions: [...hit.positions, cell] }
            : hit
        )
      );
    } else {
      setMissCells([...missCells, cell]);
    }
  };

  const isShipSunk = (ship: Ship) => {
    const shipType = getShipTypeByShip(ship);
    const shipConfig = getShipConfigByShip(ship);

    return (
      hits.find(
        (hitShip) =>
          hitShip.ship === shipType &&
          hitShip.positions.length === shipConfig.size
      ) !== undefined
    );
  };

  const contextValue = useMemo(() => {
    return {
      isInitializing,
      ships,
      hits,
      missCells,
      hasWon: SHIPS.find((ship) => !isShipSunk(ship)) === undefined,
      isShipSunk,
      handleCellClick,
      reset: initializeGame
    };
  }, [
    isInitializing,
    ships,
    gameLayout,
    hits,
    missCells,
    isShipSunk,
    handleCellClick,
    initializeGame
  ]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
