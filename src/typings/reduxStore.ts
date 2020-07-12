export interface BaseAction {
	type: string;
	payload?: any;
}

export interface StoreSliceAction {
	data?: any;
	loading: boolean;
	error: any;
	success?: boolean;
}

export interface DecodedUserToken {
	alias: string;
	avatar: string;
	email: string;
	exp: number;
	iat: number;
	sub: string;
}
