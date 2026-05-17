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
