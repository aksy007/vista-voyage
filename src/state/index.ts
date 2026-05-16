import { create } from "zustand";

type State = {};

type Actions = {};

export const useState = create<State & Actions>((set) => ({}));
