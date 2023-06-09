import {combineReducers} from '@reduxjs/toolkit';
import {reducer as contactReducer} from './contact/reducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export {rootReducer};
