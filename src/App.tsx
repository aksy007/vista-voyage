import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import Layout from "./layout/Layout";
import Voyage from "./pages/voyage";
import theme from "./utils/theme";
import NewStory from "./pages/new-story";

const Blogs = () => <div>Blogs Page</div>;
const Account = () => <div>Account Page</div>;

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const muiTheme = theme(prefersDarkMode ? "dark" : "light");

  // Centralized route config
  const routesConfig = [
    { path: "/", element: <Voyage />, index: true },
    { path: "blogs", element: <Blogs /> },
    { path: "account", element: <Account /> },
    { path: "new-story", element: <NewStory /> },
  ];

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routesConfig.map(({ path, element, index }) => (
              <Route
                key={path || "index"}
                path={index ? "" : path}
                index={index}
                element={element}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
