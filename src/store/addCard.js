import {createSlice} from "@reduxjs/toolkit";

const initialState = { name: '', cardNumber: '', limit: 0, balance: 0 };

const addCardSlice = createSlice({
  name: 'add-card',
  initialState,
  reducers: {
    setName(state, action) { state.name = action.payload; },
    setCardNumber(state, action) { state.cardNumber = action.payload; },
    setLimit(state, action) { state.limit = action.payload; },
    resetForm(state) {
      state.name = initialState.name;
      state.cardNumber = initialState.cardNumber;
      state.limit = initialState.limit;
    }
  },
});

const { actions, reducer } = addCardSlice;
export const { setName, setCardNumber, setLimit, resetForm } = actions
export default reducer;
