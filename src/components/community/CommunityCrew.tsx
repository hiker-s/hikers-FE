import * as Styled from "./CommunityCrew.styled";
import { GreenBtn } from "../common/button/styled";
import CrewList from "../common/list/CrewList";

export default function CommunityCrew() {
  const MOCK_COMMUNITY_CREW = [
    {
      crew_id: 1,
      title: "인왕산 크루 구해요 !",
      content: "우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      crew_id: 2,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      crew_id: 3,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      crew_id: 4,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      crew_id: 5,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      crew_id: 1,
      title: "인왕산 크루 구해요 !",
      content: "우리 인왕산 크루는 등산을 못하더라도",
    },
  ];

  return (
    <Styled.Wrapper>
      <CrewList crew_data={MOCK_COMMUNITY_CREW} />
      <Styled.ButtonWrapper>
        <GreenBtn
          onClick={() => console.log("모집글 작성 버튼 클릭")}
          $padding="0.38rem 1rem"
          $bgColor="#349989"
          color="white"
          $fontSize="0.875rem"
          $width="6.75rem"
        >
          모집글 작성하기
        </GreenBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
