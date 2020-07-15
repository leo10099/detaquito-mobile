// Typings
import { RootState } from '~/store';
import { StoreSliceAction } from '~/typings';

// Local Strategy Registration
export const selectRegistration = (state: RootState): StoreSliceAction => state.auth.registration;
// Google Authentication
export const selectGoogleAuthentication = (state: RootState): StoreSliceAction =>
	state.auth.googleAuth;
