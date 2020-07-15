export interface TransformedGoogleProfile {
	provider: string;
	id: string;
	displayName: string;
	emails: [{ value: string }];
	photos: [
		{
			value: string;
		}
	];
}
