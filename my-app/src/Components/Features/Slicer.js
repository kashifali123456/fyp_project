import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk("cartSlicer", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data, "sd");
  return data;
});

const initialState = {
  selection: [],
  allProduct: [],
  loader: false,
  sucess: false,
  fail: false,
};

const cartSlicer = createSlice({
  name: "cartSlicer",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.selection.push(action.payload);
    },
    remove: (state, action) => {
      state.selection = state.selection.filter(
        (item) => item.id !== action.payload
      );
    },
  },

  extraReducers: {
    [getData.pending]: (state) => {
      state.loader = true;
      state.sucess = false;
      state.fail = false;
    },
    [getData.fulfilled]: (state, action) => {
      state.loader = false;
      state.sucess = true;
      state.allProduct = action.payload;
      state.fail = false;
    },
    [getData.rejected]: (state) => {
      state.loader = false;
      state.sucess = false;
      state.fail = true;
    },
  },
});

export const { AddToCart, remove } = cartSlicer.actions;
export default cartSlicer.reducer;
