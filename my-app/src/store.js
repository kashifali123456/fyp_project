import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./Components/Features/Slicer";
export const store = configureStore({
  reducer: {
    cartData: cartSlicer,
  },
});
