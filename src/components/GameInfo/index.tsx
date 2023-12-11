import { Box, Grid, SvgIcon } from "@mui/material";
import { HitIcon } from "assets/svg";
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
          sx={classes.shipImage}
        />
        {[...Array(shipConfig.size).keys()].map((sizeKey) => (
          <Box key={sizeKey} sx={classes.hitIconContainer}>
            <SvgIcon component={HitIcon} />
          </Box>
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
