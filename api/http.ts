import axios, { AxiosInstance } from 'axios'

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

http.interceptors.response.use(
	(response) => response,
	(error) => {
		// if (axios.isAxiosError(error)) return error.response?.data?.message
		if (error.response?.data) return Promise.reject(error.response.data)
		else return Promise.reject(error)
	}
)

export const addAuthHeaders = (axiosInstance: AxiosInstance, token: string | null): void => {
	if (!token) return

	if (token.startsWith('Bearer')) axiosInstance.defaults.headers.common.Authorization = token
	else axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const removeAuthHeaders = (axiosInstance: AxiosInstance): void => {
	axiosInstance.defaults.headers.common.Authorization = ''
}

export default http
