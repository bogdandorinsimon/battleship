import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

const HEADER_HEIGHT = 74;

export const sxStyles = (): { [_: string]: SxProps } => ({
  appBar: {
    zIndex: 3000,
    bgcolor: theme.palette.white.main,
    boxShadow: 0,
    height: HEADER_HEIGHT
  },
  toolbar: {
    height: "100%"
  },
  title: {
    alignSelf: "center"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    bgcolor: theme.palette.secondary.main
  }
});
