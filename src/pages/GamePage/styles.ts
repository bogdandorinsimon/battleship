import { SxProps } from "@mui/material";
import { theme } from "theme/theme";

export const sxStyles = (): { [_: string]: SxProps } => ({
  container: {
    width: "100%",
    height: "100%"
  },
  resetButton: {
    position: "absolute",
    bottom: 12,
    left: 28,
    color: theme.palette.text.primary,
    fontSize: 20,
    alignSelf: "flex-start"
  }
});
