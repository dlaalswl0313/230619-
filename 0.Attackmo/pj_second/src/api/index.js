// Axios 라이브러리를 불러옵니다.
import axios from 'axios';

// Axios를 사용하기 위한 설정을 구성합니다.
const instance = axios.create({
	baseURL: 'http://localhost:5173/Test', // 서버의 기본 URL을 설정합니다.
});

// 사용자 등록 요청을 보내는 함수를 정의합니다.
function registerUser(userData) {
	return instance.post('Test', userData);
}

// 사용자 등록 함수를 외부에서 사용할 수 있도록 내보냅니다.
export { registerUser };



  
  
  
  