import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (cellSize: number): { [_: string]: SxProps } => ({
  cell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.primary.main
  },
  button: {
    display: "flex",
    width: "95%",
    height: "95%"
  },
  icon: {
    display: "flex",
    width: cellSize,
    height: cellSize
  }
});
