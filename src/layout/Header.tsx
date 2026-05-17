import React from "react";
import { ArrowLeft } from "lucide-react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton, onBack }) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar
        sx={{
          minHeight: "64px",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {showBackButton && (
          <IconButton edge="start" onClick={onBack}>
            <ArrowLeft size={20} />
          </IconButton>
        )}

        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
