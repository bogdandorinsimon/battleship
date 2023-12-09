import { Box, Grid } from "@mui/material";
import HitSmallImage from "assets/hit-small.png";
import { useGameContext } from "context/GameContext/useGameContext";
import { getShipConfigByShip } from "helpers/game";
import { ShipConfig } from "models/game";
import { sxStyles } from "./styles";

const GameInfo = () => {
  const classes = sxStyles();
  const { ships } = useGameContext();

  const renderShipType = (shipConfig: ShipConfig) => {
    return (
      <Box sx={classes.shipContainer}>
        <Box
          key={shipConfig.img}
          component="img"
          src={shipConfig.img}
          sx={{ objectFit: "contain", display: "flex" }}
        />
        {[...Array(shipConfig.size).keys()].map((sizeKey) => (
          <Box
            key={sizeKey}
            component="img"
            src={HitSmallImage}
            sx={{ objectFit: "contain", display: "flex" }}
          />
        ))}
      </Box>
    );
  };

  return (
    <Grid item xs={1}>
      {ships.map((ship) => renderShipType(getShipConfigByShip(ship)))}
    </Grid>
  );
};

export default GameInfo;
