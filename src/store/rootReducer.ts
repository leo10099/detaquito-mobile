import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import Auth from './Auth/Auth.reducer';

const rootReducer = combineReducers({
	auth: Auth.reducer,
});

export default rootReducer;
