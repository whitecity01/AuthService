import { logout } from '../Api/Api';

const Logout = () => {
  const logoutHandler = () => {
    logout(); // 로그아웃 함수 호출
  };
  return (
    <button type="submit" onClick={logoutHandler}>
      로그아웃
    </button>
  );
};

export default Logout;
