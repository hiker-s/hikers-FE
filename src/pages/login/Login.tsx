import { Input } from "../../components/common/input/Input";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { BottomBtn } from "../../components/common/button/BottomBtn";
import { Header } from "../../components/common/header/Header";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/common/layout/Layout";
import { accountApi } from "../../apis/account/AccountApi";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    user_id: "",
    passwd: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const isValid = formValue.user_id.trim() !== "" && formValue.passwd.trim() !== "";

  const handleBackBtn = () => {
    navigate("/");
  };

  const handleLogin = async () => {
    try {
      await accountApi.postLogin(formValue);
      navigate("/home");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              alert("아이디 또는 비밀번호를 확인해주세요.");
              break;
          }
        } else if (error.request) {
          alert("서버와 통신할 수 없습니다. 네트워크 연결을 확인해주세요.");
        } else {
          alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
    }
  };

  const handleGoSignUp = () => {
    navigate("/signup");
  };

  return (
    <Layout $margin="6.25rem 0 0 0">
      <Styled.Wrapper>
        <Header isOnboarding={true} onClick={handleBackBtn} />
        <Styled.imgWrapper>
          <img src={logo} alt="hikers" />
        </Styled.imgWrapper>
        <Styled.InputWrapper>
          <Input
            title={"아이디"}
            type="text"
            name="user_id"
            value={formValue.user_id}
            onChange={handleChange}
            placeholder={"아이디를 입력해주세요"}
          />
          <Input
            title={"비밀번호"}
            type="password"
            name="passwd"
            value={formValue.passwd}
            onChange={handleChange}
            placeholder={"비밀번호를 입력해주세요"}
          />
        </Styled.InputWrapper>
        <Styled.ButtonWrapper>
          <BottomBtn disabled={!isValid} onClick={handleLogin}>
            로그인
          </BottomBtn>
          <Styled.GoSignUpBtn onClick={handleGoSignUp}>
            하이커스 회원이 아니신가요? <span>회원가입</span>
          </Styled.GoSignUpBtn>
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </Layout>
  );
};

export default Login;
