import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/ShopSlice"
import counterReducer from "../features/counter/CounterSlice"
import cartReducer from "../features/cart/CartSlice"
import authReducer from "../features/user/UserSlice.js"


import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(shopApi.middleware)
            .concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store