import {createSlice} from "@reduxjs/toolkit";

const initialState = { all: [] };

const viewCardsSlice = createSlice({
  name: 'existing-cards',
  initialState,
  reducers: {
    addToExistingCards(state, action) { state.all = [...state.all, action.payload]; },
    setExistingCards(state, action) { state.all = action.payload; }
  },
});

const { actions, reducer } = viewCardsSlice;
export const { addToExistingCards, setExistingCards } = actions;
export default reducer;
