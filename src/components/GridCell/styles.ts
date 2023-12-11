import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  cell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    aspectRatio: 1
  },
  button: {
    minWidth: 0,
    minHeight: 0,
    width: "100%",
    height: "100%"
  },
  icon: {
    display: "flex",
    width: "100%",
    height: "100%",
    viewBox: "0 0 100 100"
  },
  mobileIcon: {
    width: 20,
    height: 20
  }
});
