import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./rtk";
import { myreducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    [myreducer.name]: myreducer.reducer
  },
  middleware: (middle)=>middle().concat(myApi.middleware    )
});
