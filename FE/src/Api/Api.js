import axios from 'axios'
const ServerIp = process.env.REACT_APP_SERVER_IP;

const RegisterPost = async (user) => {
    try {
        console.log(user);
        const email = user.emailCheck;
        const password = user.passwordCheck;

        const data = {
            email: email,
            password: password
        };
        console.log(data);

        const response = await axios.post(`${ServerIp}/users/register`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        console.log('등록 성공:', response.data);
    } catch (error) {
        console.error('등록 실패:', error);
    }
};


const LoginPost = async (data) => {
    try {
        console.log(data);
        console.log(ServerIp);
        const response = await axios.post(`${ServerIp}/users/login`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        
        console.log('등록 성공:',response.data);
        window.location.href = '/success';
    } catch (error) {
        console.error('등록 실패:', error);
    }
}

const logout = async () => {
    try {
        const data = "hi";
        //console.log(process.env.REACT_APP_SERVER_IP);
        const response = await axios.post(`${ServerIp}/users/logout`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        //document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // 적절한 쿠키 이름을 사용

        console.log('등록 성공:', response);
        
    } catch (error) {
        console.error('등록 실패:', error);
    }
}



export {logout};
export {LoginPost};
export {RegisterPost};