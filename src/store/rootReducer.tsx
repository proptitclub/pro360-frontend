import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth.store';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
