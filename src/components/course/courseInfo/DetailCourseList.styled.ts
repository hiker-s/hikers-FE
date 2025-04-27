import styled from "styled-components";

interface LineProps {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.63rem 1.25rem 1.25rem 1.25rem;
`;

export const Title = styled.div`
  color: #3b3b3b;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CourseContainer = styled.div`
  width: 100%;
  max-width: 21.875rem;
`;

export const CourseItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled.div`
  padding-top: 0.19rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.44rem;
`;

export const Line = styled.div<LineProps>`
  width: 0.3125rem;
  height: 7.5rem;
  background-color: ${(props) => props.color};
`;

interface CircleProps {
  color: string;
}

export const Circle = styled.div<CircleProps>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.4375rem;
  padding: 0.1875rem 0.5rem;
  border-radius: 6.25rem;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  z-index: 3;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
`;

export const DetailTitle = styled.span`
  color: #a4a4a4;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DetailContext = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.31rem;
  align-items: center;
`;

export const DetailInfo = styled.div`
  color: #000;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DivideLine = styled.div`
  width: 0.03125rem;
  height: 0.625rem;
  background: #a4a4a4;
  margin: 0;
`;

export const RoadViewWrapper = styled.div`
  width: 8.33331rem;
  height: 6.25rem;
  flex-shrink: 0;
  aspect-ratio: 133.33/100;
  border-radius: 0.625rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  padding: 0.44rem 0;
  justify-content: flex-end;
`;
