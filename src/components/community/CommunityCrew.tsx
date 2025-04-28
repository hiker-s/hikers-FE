import * as Styled from "./CommunityCrew.styled";
import CrewList from "../common/list/CrewList";
import { useNavigate } from "react-router-dom";
import { GreenBtn } from "../common/button/GreenBtn";
import { useEffect, useState } from "react";
import { crewApi } from "../../apis/community/CrewApi";

export default function CommunityCrew() {
  const navigate = useNavigate();
  const [crewData, setCrewData] = useState<{ id: number; title: string; content: string; image_urls: string[] }[]>([]);

  useEffect(() => {
    const fetchCrewList = async () => {
      try {
        const crew = await crewApi.getCrewList();
        setCrewData(crew);
      } catch (error) {
        console.error("크루 글 목록 데이터 가져오기 실패:", error);
      }
    };

    fetchCrewList();
  }, []);

  return (
    <Styled.Wrapper>
      <CrewList crew_data={crewData} />
      <Styled.ButtonWrapper>
        <GreenBtn onClick={() => navigate("crew/write")}>모집글 작성하기</GreenBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
