import { useEffect, useState } from 'react';
import axios from 'axios';
const ServerIp = process.env.REACT_APP_SERVER_IP;

const SuccessPage = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(`${ServerIp}/users/success`, null, {
            withCredentials: true
        });

        setIsAuth(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('tlqkf:', error);
      }
    };

    fetchData();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  } else if (isAuth) {
    return <div>로그인 성공!</div>;
  } else {
    return <div>인증되지 않은 사용자</div>;
  }
};

export default SuccessPage;
