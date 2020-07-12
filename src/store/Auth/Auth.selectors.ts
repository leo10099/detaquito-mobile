// Typings
import { RootState } from '~/store';
import { StoreSliceAction } from '~/typings';

// Registration
export const selectRegistration = (state: RootState): StoreSliceAction => state.auth.registration;
