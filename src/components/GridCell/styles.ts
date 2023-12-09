import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  cell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.black.main
  }
});
