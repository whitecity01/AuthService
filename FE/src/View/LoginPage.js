import LoginForm from "../Components/LoginForm";
import Logout from "../Components/Logout";
const LoginPage = () => {

  return (
    <div>
        <p>로그인 페이지</p>
        <LoginForm/>
        <Logout/>
        <a href="./">메인 페이지로 이동</a>

    </div>
  );
};

export default LoginPage;