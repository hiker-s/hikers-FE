import * as Styled from "./styled";
import { GreenBtn } from "../button/GreenBtn";

interface ModalProps {
  title: string;
  onClose: () => void;
  onKakaoShare: () => void;
  onLinkShare: () => void;
}

export const Modal = ({ title, onClose, onKakaoShare, onLinkShare }: ModalProps) => {
  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
        <Styled.ModalHeader>
          <Styled.ModalTitle>코스 공유하기</Styled.ModalTitle>
          <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.ShareText>
            <Styled.Bold>{title}</Styled.Bold>를
          </Styled.ShareText>
          <Styled.ShareText>친구와 공유해보세요</Styled.ShareText>
          <Styled.ShareButtonsWrapper>
            <GreenBtn
              onClick={onKakaoShare}
              padding="0.75rem 1rem"
              bgColor="#FAE100"
              color="#3B3B3B"
              fontSize="1.125rem"
              width="9.8125rem"
            >
              카카오톡 공유
            </GreenBtn>
            <GreenBtn
              onClick={onLinkShare}
              padding="0.75rem 1rem"
              bgColor="#349989"
              fontSize="1.125rem"
              width="9.8125rem"
            >
              링크 공유
            </GreenBtn>
          </Styled.ShareButtonsWrapper>
        </Styled.ModalBody>
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};
