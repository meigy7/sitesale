import { createSlice } from "@reduxjs/toolkit";

const bascetSlice = createSlice({
  name: 'bascet',
  initialState: {
    bascet: []
  },
  reducers: {
    addCardBascet(state, action) {
      console.log(action);
      state.cards.push({
        id: Date.now(),
        name: action.payload.name,
        category: action.payload.currentCategory,
        subCategory: action.payload.currentSubCategory,
        startPrice: action.payload.startPrice,
        endPrice: action.payload.endPrice,
        link: action.payload.link
      })
    },
  },
});

export const { addCardBascet } = bascetSlice.actions;
export default bascetSlice.reducer;
