import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: #3b3b3b;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
  height: 26.875rem;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.62rem;
`;

export const PagingBtn = styled.button<{ disabled: boolean }>`
  border: none;
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.5rem 0.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#C8C8C8" : "#3B3B3B")};
`;
export const PageNumber = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 0.8775;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
