/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Typings
import { StoreSliceAction, DecodedUserToken } from '~/typings';

// JWT
import jwt from 'react-native-pure-jwt';

// Action Types
export type RegistrationPayload = { email: string; alias: string; secret: string };

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			alias: '',
			avatar: '',
			email: '',
			id: -1,
		},
		registration: {
			error: null,
			loading: false,
		} as StoreSliceAction,
	},
	reducers: {
		// Registration
		registrationRequest: ({ registration }, { payload }: PayloadAction<RegistrationPayload>) => {
			delete registration.success;
			registration.loading = true;
		},
		registrationFailure: ({ registration }, { payload }) => {
			registration.loading = false;
			registration.error = payload;
		},
		registrationSuccess: (state, { payload }) => {
			const decodedToken = jwt.decode(payload.accessToken) as DecodedUserToken;
			state.user.alias = decodedToken.alias;
			state.user.avatar = decodedToken.avatar;
			state.user.email = decodedToken.email;
			state.user.id = parseInt(decodedToken.sub, 10);

			state.registration.loading = false;
			state.registration.success = true;

			return state;
		},
	},
});

export default authSlice;
