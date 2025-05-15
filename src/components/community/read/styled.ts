import styled from "styled-components";

// 게시글 제목 조회 컴포넌트 스타일
export const TitleWrapper = styled.div`
  width: 350px;
`;

export const Title = styled.div`
  color: #3b3b3b;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
`;

// 생성 정보 조회 컴포넌트 스타일
export const CreateInfoWrapper = styled.div`
  padding-bottom: 0.62rem;
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
`;

export const WriteInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #3b3b3b;
  font-size: 0.75rem;
  font-style: normal;
  line-height: 130%; /* 0.975rem */
`;

export const HeartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeartCount = styled.div`
  color: #3b3b3b;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

// 게시글 내용 조회 컴포넌트
export const ContentWrapper = styled.div`
  width: 350px;
  min-height: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ImageContent = styled.div`
  width: auto;
  height: 200px;
  img {
    height: 100%;
    object-fit: contain;
    border-radius: 0.62rem;
  }
`;
export const Content = styled.div`
  color: #3b3b3b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1rem */
  white-space: pre-line;
`;

// 리뷰 조회 글 정보 컴포넌트
export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.31rem;
`;

export const MountainName = styled.div`
  border-radius: 0.375rem;
  background: #b8dbd9;
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: #3b3b3b;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 1.05rem */
`;

export const CourseName = styled.div`
  color: #3b3b3b;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 1.05rem */
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  background: #c8c8c8;
`;

// 수정하기 삭제하기 버튼 컴포넌트
export const BtnWrapper = styled.div`
  padding: 0.44rem 0;
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.69rem;
`;

export const EditBtn = styled.div`
  display: flex;
  height: 1.875rem;
  padding: 0.375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background-color: #c8c8c8;
  cursor: pointer;
  &:hover {
    color: #349989;
  }
`;
export const DeleteBtn = styled.div`
  display: flex;
  height: 1.875rem;
  padding: 0.375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  color: #a4a4a4;
  border: 1px solid #a4a4a4;
  cursor: pointer;
  &:hover {
    color: #349989;
    border: 1px solid #349989;
  }
`;
