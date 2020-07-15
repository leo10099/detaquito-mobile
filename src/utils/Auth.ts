// Google Auth
import * as Google from 'expo-google-app-auth';
// Types
import { TransformedGoogleProfile } from '~/typings';

export const buildGoogleProfile = (profile: Google.GoogleUser): TransformedGoogleProfile => {
	return {
		provider: 'google',
		id: profile?.id ?? '',
		displayName: `${profile?.givenName} ${profile?.familyName}`,
		photos: [{ value: profile?.photoUrl ?? '' }],
		emails: [{ value: profile?.email ?? '' }],
	};
};
