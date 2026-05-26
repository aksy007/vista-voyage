import React, { useEffect, useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SearchIcon } from "lucide-react";
import Filters from "../../components/Filters.tsx";
import { GetStoryCards, type StoryCardType } from "../../data/PostCard.ts";
import StoryCard from "../../components/StoryCard.tsx";

// TODO:
// Autocomplete Component along with filtering for voyage type
// MapBox GL JS for map rendering
// Story cards for each voyage with details and images

const VoyageHeader = ({
  searchLocation,
  setSearchLocation,
}: {
  searchLocation: string;
  setSearchLocation: (value: string) => void;
}) => {
  return (
    <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between" }}>
      <TextField
        id="search_location"
        type="search"
        label="Search Location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon size={16} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          flex: 1,
          "& .MuiInputBase-input": { padding: "8px 16px" },
          "& .MuiInputLabel-root": {
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
          },
          "& .MuiInputLabel-shrink": {
            top: 0,
            transform: "translateY(-50%) scale(0.75)",
          },
        }}
      />
      <Filters />
    </Stack>
  );
};

const Voyage = () => {
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [storyCards, setStoryCards] = useState<StoryCardType[]>([]);

  useEffect(() => {
    GetStoryCards().then((data) => setStoryCards(data as StoryCardType[]));
  }, []);

  return (
    <>
      <VoyageHeader
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />

      {storyCards?.length
        ? storyCards.map((card) => (
            <StoryCard key={card.story_id} story={card} />
          ))
        : ""}
    </>
  );
};

export default Voyage;
