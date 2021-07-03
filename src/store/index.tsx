import { configureStore } from "@reduxjs/toolkit";
import { projectListSilce } from "screens/project-list/project-list-slice";

export const rootReducer = {
  projectList: projectListSilce.reducer,
};
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
