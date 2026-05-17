import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Voyage from "./pages/voyage";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import theme from "./utils/theme";

const Blogs = () => <div>Blogs Page</div>;
const Account = () => <div>Account Page</div>;

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const muiTheme = theme(prefersDarkMode ? "dark" : "light");

  console.log("Current theme mode:", prefersDarkMode ? "dark" : "light");
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Voyage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
