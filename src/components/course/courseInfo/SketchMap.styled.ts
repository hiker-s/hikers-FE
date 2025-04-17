import styled from "styled-components";

export const SketchMapWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 1.63rem 1.25rem 1.25rem 1.25rem;
`;

export const CourseInfoTitle = styled.div`
  align-self: stretch;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  background-color: #f5f5f5;

  .map-inner {
    width: 100%;
    height: 100%;
  }
`;
