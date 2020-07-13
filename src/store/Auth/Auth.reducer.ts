/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Typings
import { StoreSliceAction } from '~/typings';

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
			state.user.alias = payload.alias;
			state.user.avatar = payload.avatar;
			state.user.email = payload.email;
			state.user.id = payload.id;

			state.registration.loading = false;
			state.registration.success = true;

			return state;
		},
	},
});

export default authSlice;
