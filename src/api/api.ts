import axios, { AxiosInstance } from 'axios';

const Api: AxiosInstance = axios.create({
	baseURL: process.env.API_BASE_URL,
	withCredentials: true,
});

export { Api };
