import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 1.63rem 1.25rem 1.25rem 1.25rem;
`;

export const CourseTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CourseTitle = styled.div`
  width: 12rem;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: normal;
  flex: 1;
  margin-right: 0.2rem;
`;

export const CourseLevel = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  background: #f2dabd;
  color: #f1870d;
  text-align: center;
  font-family: "Pretendard";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const GreenBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CourseMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3125rem;
`;

export const StartToEnd = styled.div`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: 400;
`;

export const CourseStats = styled.div`
  display: flex;
  width: 20.5rem;
  height: 1.0625rem;
  align-items: center;
  gap: 1.625rem;
`;

export const CourseStatsItem = styled.span`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: 400;
`;
