import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './Action/habitSlice'

const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;