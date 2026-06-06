import { create } from "zustand";
import type { filter } from "../utils/atom";

type AppState = {
  filter: filter[] | null;
};

type Actions = {
  setFilter: (filter: filter[] | null) => void;
};

export const useAppState = create<AppState & Actions>((set) => ({
  filter: null,
  setFilter: (filter) => set({ filter }),
}));

type StoryState = {
  title: string;
  description?: string;
  address: string;
  mediaFiles?: File[];
};

type StoryAction = {
  setStory: (story: StoryState) => void;
};

export const useStoryState = create<StoryState & StoryAction>((set) => ({
  title: "",
  description: "",
  address: "",
  mediaFiles: [],
  setStory: (story) => set(() => ({ ...story })),
}));
