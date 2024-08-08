import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import shopReducer from "../features/shop/ShopSlice";

import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: shopReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
});

setupListeners(store.dispatch)

export default store