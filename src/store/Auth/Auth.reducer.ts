/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Typings
import { StoreSliceAction, DecodedUserToken } from '~/typings';

// JWT
import jwt from 'expo-jwt';

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
			console.log(payload);

			return state;
		},
	},
});

export default authSlice;
