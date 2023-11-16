import axios, { AxiosRequestConfig, AxiosError } from 'axios'

const BASE_URL = 'https://api.myjson.online/v1/records/'

const axiosBaseQuery = () => {
	const axiosInstance = axios.create({
		baseURL: BASE_URL,
	})

	return async ({ url, method, data, params }: AxiosRequestConfig) => {
		try {
			const result = await axiosInstance({ url, method, data, params })
			return { data: result.data }
		} catch (axiosError) {
			let err = axiosError as AxiosError
			return {
				error: { status: err.response?.status, data: err.response?.data },
			}
		}
	}
}

export default axiosBaseQuery
