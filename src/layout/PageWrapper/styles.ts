import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    flexGrow: 1,
    p: 7,
    pt: 0,
    bgcolor: theme.palette.white.main,
    overflow: "auto",
    position: "relative"
  }
});
