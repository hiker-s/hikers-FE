import * as Styled from "./SearchErrorModal.styled";
import { useNavigate } from "react-router-dom";

interface SearchErrorModalProps {
  onClose: () => void;
}

export const SearchErrorModal = ({ onClose }: SearchErrorModalProps) => {
  const navigate = useNavigate();

  const handleRe_search = () => {
    navigate("/home");
  };
  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.SearchErrorModal>
        <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>

        <Styled.ModalText>
          <span>죄송합니다</span>
          <br />
          해당 산에 대한 정보가 없습니다.
          <br />
          다른 키워드로 다시 시도해주세요.
        </Styled.ModalText>
        <Styled.ModalButton onClick={handleRe_search}>다시 검색하기</Styled.ModalButton>
      </Styled.SearchErrorModal>
    </Styled.ModalOverlay>
  );
};
