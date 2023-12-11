import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    flexGrow: 1,
    p: 7,
    pt: 3,
    bgcolor: theme.palette.secondary.main,
    overflow: "auto",
    position: "relative"
  }
});
