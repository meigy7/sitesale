import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './slices/cardSlice';
import userReducer from './slices/userSlice'
import bascetReducer from "./slices/bascetSlice";
import { getCards } from './getCards'

export default configureStore({
  reducer: {
    cards: cardReducer,
    user: userReducer,
    [getCards.reducerPath]: getCards.reducer,
    bascet: bascetReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(getCards.middleware)
})