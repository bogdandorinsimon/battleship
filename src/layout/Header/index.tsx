import { AppBar, Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { usePageTitle } from "hooks/usePageTitle";
import { theme } from "theme/theme";
import { sxStyles } from "./styles";

export const Header = () => {
  const classes = sxStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pageTitle = usePageTitle();

  return (
    <AppBar position="relative" sx={classes.appBar}>
      <Toolbar disableGutters sx={classes.toolbar}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={classes.container}
        >
          <Typography
            variant={isMobile ? "h3" : "h1"}
            sx={classes.title}
            color="text.primary"
          >
            {pageTitle}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
