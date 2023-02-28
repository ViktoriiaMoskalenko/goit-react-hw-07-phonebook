import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { nameReducer } from './nameSlice';
import { numberReducer } from './numberSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    name: nameReducer,
    number: numberReducer,
  },
});
