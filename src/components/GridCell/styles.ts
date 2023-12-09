import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  cell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.black.main
  },
  cellContent: {
    width: "100%",
    height: "100%"
  }
});
