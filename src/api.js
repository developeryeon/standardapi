import axios from 'axios';

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
	baseURL: 'http://localhost:4003',
	timeout: 1000,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
	function (config) {
		// 요청을 보내기 전 수행
		console.log('인터셉트 요청 성공!');
		return config;
	},
	function (error) {
		// 오류 요청을 보내기 전 수행
		console.log('인터셉트 요청 오류!');
		return Promise.reject(error);
	}
);

// 응답 인터셉터 추가
api.interceptors.response.use(
	function (response) {
		console.log('인터넵트 응답 받았어요!');
		// 정상 응답
		return response;
	},
	function (error) {
		console.log('인터셉트 응답 못받았어요...ㅠㅠ');
		return Promise.reject(error);
	}
);

export default api;
