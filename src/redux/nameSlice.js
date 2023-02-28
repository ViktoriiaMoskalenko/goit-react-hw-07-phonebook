import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    setStatusName(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusName } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
