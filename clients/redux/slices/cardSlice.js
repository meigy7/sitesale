import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showItem: null,
  cardName: ''
}

const cardSlice = createSlice({
  name: 'descriptionCards',
  initialState,
  reducers: {
    onSeeShowItem(state, action) {
      console.log(state);
      console.log(action);
      console.log(action.payload.cardName);
      state.showItem = action.payload.showItem;
      state.cardName = action.payload.cardName;
    },
    offSeeShowItem(state, action) {
      console.log(state);
      console.log(action);
      state.showItem = action.payload.ofItem;
      state.cardName = '';
    }
  },
});

export const { onSeeShowItem, offSeeShowItem } = cardSlice.actions;
export default cardSlice.reducer;
