// src/layout/Layout.tsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import BottomNavigationBar from "./BottomNavigation";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/blogs":
        return "Blogs";
      case "/account":
        return "Account";
      default:
        return "Page";
    }
  };

  const showBackButton = location.pathname !== "/";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Header
        title={getPageTitle()}
        showBackButton={showBackButton}
        onBack={() => navigate(-1)}
      />

      <Box
        component="main"
        sx={{
          flex: 1,
          p: 2,
          pb: "90px",
          backgroundColor: "var(--bg)",
          color: "var(--text)",
        }}
      >
        <Outlet />
      </Box>

      <BottomNavigationBar />
    </Box>
  );
};

export default Layout;
