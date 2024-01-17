import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

// Extract the type of thunk middleware
// type ThunkMiddleware = typeof thunk;

//** The Above Method is for dispatch functions instead of plain objects **//

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;