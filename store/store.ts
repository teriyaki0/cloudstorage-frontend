import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import stateReducer, { stateSlice } from "./slice";

const makeStore = () =>
  configureStore({
    reducer: {
      [stateSlice.name]: stateSlice.reducer,
    },
  });

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type RootDispatch = RootStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

const rootReducer = combineReducers({
  state: stateReducer,
});

export const wrapper = createWrapper<RootStore>(makeStore, { debug: true });
