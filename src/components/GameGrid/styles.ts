import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (size: number): { [_: string]: SxProps } => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  grid: {
    borderStyle: "solid",
    borderColor: theme.palette.black.main,
    width: size,
    height: size
  }
});
