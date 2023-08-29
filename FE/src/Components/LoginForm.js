import { useState } from "react";
import { LoginPost } from "../Api/Api";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const verify = (event) => {
    event.preventDefault();
    LoginPost(formData);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <form onSubmit={verify}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        
        placeholder="test@email.com"
        onChange={handleInputChange}
        value={formData.email}
      /> 
      <br/>
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="비밀번호 입력"
        onChange={handleInputChange}
        value={formData.password}
      />
      <br/>
      <br/>
      <button type="submit">로그인</button>

    </form>
  );
};

export default LoginForm;
