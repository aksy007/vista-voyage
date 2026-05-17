import { createTheme } from "@mui/material/styles";

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: getCssVar("--accent"),
        contrastText: getCssVar("--color-on-primary"),
      },
      background: {
        default: getCssVar("--bg"),
        paper: getCssVar("--code-bg"),
      },
      text: {
        primary: getCssVar("--text-h"),
        secondary: getCssVar("--text"),
      },
      divider: getCssVar("--border"),
    },
  });

export const getCssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default theme;
