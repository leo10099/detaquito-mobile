import axios, { AxiosInstance } from 'axios';
import store from '~/store';

const Api: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	withCredentials: true,
});

const setAccessTokenInCommonHeaders = (): boolean => {
	const token = process.env.REACT_APP_JWT_TOKEN;
	if (!token) {
		return false;
	}

	Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	return true;
};
