import { Box, Grid } from "@mui/material";
import HitSmallImage from "assets/png/hit-small.png";
import { useGameContext } from "context/GameContext/useGameContext";
import { getShipConfigByShip } from "helpers/game";
import { Ship } from "models/game";
import { sxStyles } from "./styles";

const GameInfo = () => {
  const classes = sxStyles();
  const { isShipSunk, ships } = useGameContext();

  const renderShipType = (ship: Ship, index: number) => {
    const shipConfig = getShipConfigByShip(ship);

    if (isShipSunk(ship)) {
      return null;
    }

    return (
      <Box sx={classes.shipContainer} key={`${shipConfig.size}_${index}`}>
        <Box
          key={shipConfig.img}
          component="img"
          src={shipConfig.img}
          sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
        {[...Array(shipConfig.size).keys()].map((sizeKey) => (
          <Box
            key={sizeKey}
            component="img"
            src={HitSmallImage}
            sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        ))}
      </Box>
    );
  };

  return (
    <Grid item xs={1}>
      {ships.map((ship, index) => renderShipType(ship, index))}
    </Grid>
  );
};

export default GameInfo;
