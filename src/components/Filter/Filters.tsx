import React, { useState } from "react";
import { useAppState } from "../../state";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { ListFilterPlus, X } from "lucide-react";
import { FilterOptions, type filter } from "../../utils/atom";

const Filters = () => {
  const state = useAppState();
  const [open, setOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<filter[]>(
    state.filter || [],
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleApply = () => {
    state.setFilter(selectedFilters);
    handleClose();
  };

  const handleClear = () => {
    setSelectedFilters([]);
  };

  const handleToggleFilter = (option: filter) => {
    setSelectedFilters((prev) => {
      if (prev.includes(option)) {
        return [...prev.filter((f) => f !== option)];
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <>
      <IconButton aria-label="filter" onClick={handleOpen}>
        <ListFilterPlus />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "max-content",
            width: "50%",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "8px 0 0 8px",
            p: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Select Filters</Typography>
            <IconButton onClick={handleClose}>
              <X size={20} />
            </IconButton>
          </Box>

          <FormGroup>
            {FilterOptions.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={selectedFilters.includes(option)}
                    onChange={() => handleToggleFilter(option)}
                  />
                }
                label={option}
                sx={{
                  textTransform: "capitalize",
                  fontWidth: 400,
                  fontSize: "14px",
                }}
              />
            ))}
          </FormGroup>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              mt: 2,
            }}
          >
            <Button variant="outlined" onClick={handleClear}>
              Clear
            </Button>
            <Button variant="contained" onClick={handleApply}>
              Apply
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Filters;
