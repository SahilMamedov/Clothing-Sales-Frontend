import { saleAdminApi } from './../services/AdminPanelServices/saleAdminServices';
import { loginApi } from './../services/AdminPanelServices/accountServices';
import  basketSlice  from './slices/basketSlice';
import { blogApi } from './../services/blogServices';
import { shopApi } from './../services/shopServices';
import { basketApi } from './../services/basketServices';
import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "../services/goodsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import userSlice from "./slices/userSlice";
import { commentApi } from "../services/commentServices";
import { saleApi } from 'services/saleServices';
import { productApi } from 'services/AdminPanelServices/productServices';
import { CategoryAndBrand } from 'services/AdminPanelServices/categoryAndBrandservices';
import { usersApi } from 'services/AdminPanelServices/usersServices';

export const store = configureStore({
  reducer: {
    user: userSlice,
    basket:basketSlice,

    [goodsApi.reducerPath]: goodsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [basketApi.reducerPath]:basketApi.reducer,
    [shopApi.reducerPath]:shopApi.reducer,
    [blogApi.reducerPath]:blogApi.reducer,
    [saleApi.reducerPath]:saleApi.reducer,
    [loginApi.reducerPath]:loginApi.reducer,
    [saleAdminApi.reducerPath]:saleAdminApi.reducer,
    [productApi.reducerPath]:productApi.reducer,
    [CategoryAndBrand.reducerPath]:CategoryAndBrand.reducer,
    [usersApi.reducerPath]:usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      goodsApi.middleware,
      authApi.middleware,
      commentApi.middleware,
      basketApi.middleware,
      shopApi.middleware,
      blogApi.middleware,
      saleApi.middleware,
      loginApi.middleware,
      saleAdminApi.middleware,
      productApi.middleware,
      CategoryAndBrand.middleware,
      usersApi.middleware,

    ),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
