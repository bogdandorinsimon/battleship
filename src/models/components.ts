import { AlertColor } from "@mui/material";

export type SnackbarOptions = {
  type: AlertColor;
  title: string;
  message?: string;
  vertical?: "bottom" | "top";
  horizontal?: "center" | "right" | "left";
};
