import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  amount: 6,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export default basketSlice.reducer;
