import * as Styled from "./SketchMap.styled";
import useNaverMap from "../../../hooks/useNaverMap";
import { Section } from "../../../types/naverMap";

interface Props {
  sections: Section[];
}

const SketchMap = ({ sections }: Props) => {
  const { mapRef } = useNaverMap({ sections });

  return (
    <Styled.SketchMapWrapper>
      <Styled.CourseInfoTitle>약도</Styled.CourseInfoTitle>
      <Styled.MapContainer>
        <div ref={mapRef} className="map-inner" />
      </Styled.MapContainer>
    </Styled.SketchMapWrapper>
  );
};

export default SketchMap;
