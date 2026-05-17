import React from "react";
import { Home, FileText, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

const BottomNavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => {
          navigate(newValue);
        }}
        showLabels
        sx={{
          height: 68,

          "& .MuiBottomNavigationAction-root": {
            minWidth: "unset",
          },

          "& .MuiBottomNavigationAction-label": {
            fontSize: "12px",
            fontWeight: 500,
            marginTop: "2px",
          },
        }}
      >
        <BottomNavigationAction
          label="Voyage"
          value="/"
          icon={<Home size={20} />}
        />

        <BottomNavigationAction
          label="Blogs"
          value="/blogs"
          icon={<FileText size={20} />}
        />

        <BottomNavigationAction
          label="Account"
          value="/account"
          icon={<User size={20} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
