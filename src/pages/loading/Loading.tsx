import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styled from "styled-components";
import LoadingBg from "../../assets/images/LoadingBg.svg";

export default function Loading() {
  return (
    <Wrapper>
      <LottieWrapper src="https://lottie.host/8fe66b67-90cd-4d84-b2b8-0a5abe47e81d/h4YpRneupc.lottie" loop autoplay />
      <Text>잠시만 기다려주세요 !</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 100%; */
  min-height: 100vh;
  background: url(${LoadingBg}) no-repeat center;
  padding-top: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LottieWrapper = styled(DotLottieReact)`
  width: 500px;
  position: absolute;
`;

const Text = styled.div`
  color: #349989;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  top: 50%;
`;
