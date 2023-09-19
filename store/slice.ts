import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface State {
  indexPopup: number;
  indexType: number;
}

const initialState: State = {
  indexPopup: 0,
  indexType: 0,
};

export const stateSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndexPopup: (state, action: PayloadAction<number>) => {
      state.indexPopup = action.payload;
    },
    setIndexType: (state, action: PayloadAction<number>) => {
      state.indexType = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.indexType = action.payload.index.indexType;
      state.indexPopup = action.payload.index.indexPopup;

      return {
        ...state,
        ...action.payload.state,
      };
    },
  },
});

export const { setIndexPopup, setIndexType } = stateSlice.actions;

export const selectIndexPopup = (state: any) => state.index.indexPopup;
export const selectIndexType = (state: any) => state.index.indexType;

export default stateSlice.reducer;
