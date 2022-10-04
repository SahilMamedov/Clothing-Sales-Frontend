import { blogApi } from './../services/blogServices';
import { shopApi } from './../services/shopServices';
import { basketApi } from './../services/basketServices';
import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "../services/goodsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import userSlice from "./slices/userSlice";
import { commentApi } from "../services/commentServices";

export const store = configureStore({
  reducer: {
    user: userSlice,


    [goodsApi.reducerPath]: goodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [basketApi.reducerPath]:basketApi.reducer,
    [shopApi.reducerPath]:shopApi.reducer,
    [blogApi.reducerPath]:blogApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      goodsApi.middleware,
      authApi.middleware,
      commentApi.middleware,
      basketApi.middleware,
      shopApi.middleware,
      blogApi.middleware,
    ),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
