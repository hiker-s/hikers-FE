import * as Styled from "./SignUp.styled";
import { BottomBtn } from "../../components/common/button/BottomBtn";
import { Input } from "../../components/common/input/Input";
import { Header } from "../../components/common/header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/common/layout/Layout";
import { accountApi } from "../../apis/account/AccountApi";
import { AxiosError } from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    user_id: "",
    passwd: "",
    nickname: "",
    email: "",
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const isValid =
    formValue.user_id.trim() !== "" &&
    formValue.passwd.trim() !== "" &&
    formValue.nickname.trim() !== "" &&
    formValue.email.trim() !== "";

  const handleBackBtn = () => {
    navigate("/");
  };

  const handleSignUp = async () => {
    try {
      await accountApi.postSignup(formValue);
      // console.log("회원가입 성공");
      navigate("/signup/success");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          switch (error.response.status) {
            case 409:
              alert("이미 사용 중인 아이디입니다.");
              break;
          }
        } else if (error.request) {
          alert("서버와 통신할 수 없습니다. 네트워크 연결을 확인해주세요.");
        } else {
          alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <Layout $margin="6.25rem 0 0 0">
      <Styled.Wrapper>
        <Header isOnboarding={true} onClick={handleBackBtn} />
        <Styled.TitleWrapper>
          <Styled.Title>회원가입</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.InputWrapper>
          <Styled.InputContent>
            <Input
              title="아이디"
              type="text"
              name="user_id"
              value={formValue.user_id}
              onChange={handleChange}
              placeholder="아이디를 입력해주세요"
            />
            <Input
              title="비밀번호"
              type="password"
              name="passwd"
              value={formValue.passwd}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
            />
          </Styled.InputContent>
          <Styled.Line></Styled.Line>
          <Styled.InputContent>
            <Input
              title="닉네임"
              type="text"
              name="nickname"
              value={formValue.nickname}
              onChange={handleChange}
              placeholder="닉네임을 입력해주세요"
            />
            <Input
              title="이메일"
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요"
            />
          </Styled.InputContent>
          <Styled.ButtonWrapper>
            <BottomBtn disabled={!isValid} onClick={handleSignUp}>
              회원가입하기
            </BottomBtn>
          </Styled.ButtonWrapper>
        </Styled.InputWrapper>
      </Styled.Wrapper>
    </Layout>
  );
};

export default SignUp;
