import { accountApi } from "../../apis/account/AccountApi";
import * as Styled from "./DeleteAccountModal.styled";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

interface DeleteAccountModalProps {
  onClose: () => void;
}

export const DeleteAccountModal = ({ onClose }: DeleteAccountModalProps) => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      await accountApi.postDeleteUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalWrapper>
        <Styled.CloseButton onClick={onClose}>
          <IoClose size="24" color="#3b3b3b" />
        </Styled.CloseButton>

        <Styled.TitleWrapper>
          <Styled.TitleText>
            회원 <span style={{ color: "#E77575" }}>탈퇴</span>를 <br /> 진행하시겠습니까?{" "}
          </Styled.TitleText>
          <Styled.SubTitle>회원 탈퇴 시, 모든 정보가 삭제됩니다.</Styled.SubTitle>
        </Styled.TitleWrapper>
        <Styled.BtnWrapper>
          <Styled.LeftBtn onClick={onClose}>취소</Styled.LeftBtn>
          <Styled.RightBtn onClick={handleDeleteAccount}>탈퇴</Styled.RightBtn>
        </Styled.BtnWrapper>
      </Styled.ModalWrapper>
    </Styled.ModalOverlay>
  );
};
