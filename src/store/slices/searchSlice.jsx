import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    addSearch(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const { addSearch } = searchSlice.actions;
