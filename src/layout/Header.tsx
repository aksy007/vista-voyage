// src/layout/Header.tsx
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
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "var(--bg)",
        color: "var(--text-h)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {showBackButton && (
          <IconButton
            edge="start"
            onClick={onBack}
            sx={{
              color: "var(--text-h)",
            }}
          >
            <ArrowLeft size={20} />
          </IconButton>
        )}

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "var(--text-h)",
            fontFamily: "var(--heading)",
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
