import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    setStatusNumber(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusNumber } = numberSlice.actions;
export const numberReducer = numberSlice.reducer;
