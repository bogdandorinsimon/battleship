import { SxProps } from "@mui/material";

export const sxStyles = (): { [_: string]: SxProps } => ({
  shipContainer: {
    display: "flex",
    flexDirection: "row",
    mb: 5
  },
  shipImage: {
    maxWidth: "30%",
    objectFit: "contain"
  },
  hitIconContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: "30%",
    ml: 2
  }
});
