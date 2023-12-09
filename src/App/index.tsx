import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { LocaleContextProvider } from "context/LocaleContext";
import { SnackbarProvider } from "context/SnackbarProvider";
import { ThemeProvider } from "context/ThemeProvider";
import { AppRoutes } from "routes/AppRoutes";

export const App = () => {
  return (
    <LocaleContextProvider>
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <CssBaseline />
            <AppRoutes />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </LocaleContextProvider>
  );
};
