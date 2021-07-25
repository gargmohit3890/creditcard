import {createSelector} from "reselect";

export const getNewCard = state => state['new-card'];
export const getName = createSelector([getNewCard], card => card['name']);
export const getCardNumber = createSelector([getNewCard], card => card['cardNumber']);
export const getLimit = createSelector([getNewCard], card => card['limit']);

export const getErrors = state => state['errors'];
export const getErrorShown = createSelector(
  [getErrors],
  errors => errors['shown']
);
export const getErrorMessages = createSelector(
  [getErrors],
  errors => errors['messages']
);

export const getExistingCards = state => state['existing-cards'];
export const getAllCards = createSelector([getExistingCards], cards => cards['all']);
