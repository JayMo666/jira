import { RootState } from "./../../store/index";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  projectModalOpen: boolean;
}

const initialState: State = {
  projectModalOpen: false,
};

export const projectListSilce = createSlice({
  name: "projectListSilce",
  initialState,
  reducers: {
    openProjectModal(state) {
      state.projectModalOpen = true;
    },
    closeProjectModal(state) {
      state.projectModalOpen = false;
    },
  },
});

export const projectListActions = projectListSilce.actions;
export const selectProjectModalOpen = (state: RootState) =>
  state.projectList.projectModalOpen;
