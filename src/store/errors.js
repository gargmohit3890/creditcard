import {createSlice} from "@reduxjs/toolkit";

const initialState = { shown: false, messages: [] };

const viewCardsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setErrors(state, action) {
      state.shown = true;
      state.messages = action.payload;
    },
    resetErrors(state) {
      state.shown = initialState.shown;
      state.messages = initialState.messages;
    }
  },
});

const { actions, reducer } = viewCardsSlice;
export const { setErrors, resetErrors } = actions;
export default reducer;
