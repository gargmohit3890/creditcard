import {applyMiddleware, combineReducers, compose, createStore} from '@reduxjs/toolkit'
import viewCards from "./viewCards";
import addCard from "./addCard";
import errors from "./errors";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  'existing-cards': viewCards,
  'new-card': addCard,
  'errors': errors,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export default store;
