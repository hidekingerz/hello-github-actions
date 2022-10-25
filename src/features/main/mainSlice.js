import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: false,
  data: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
});

export default mainSlice.reducer;
