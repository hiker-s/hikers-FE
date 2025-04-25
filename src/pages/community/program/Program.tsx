import * as Styled from "./Program.styled";
import programDatas from "../../../data/program-dummy.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import { GreenBtn } from "../../../components/common/button/styled";

type ProgramData = {
  id: number;
  thumbnail: string;
  title: string;
  subTitle: string;
  context: string;
  date: string;
  location: string;
  cost: string;
  notice: string;
  deadline: string;
  poster: string;
};

export default function Program() {
  const { programId } = useParams();
  const [data, setData] = useState<ProgramData | null>(null);
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (programId) {
      const filtered = programDatas.programDatas.filter((p) => p.id === parseInt(programId, 10));
      if (filtered.length > 0) {
        setData(filtered[0]);
      }
    }
  }, [programId]);

  return (
    <Layout $margin="7.5rem 0 2.5rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>프로그램</Header>
      {data && (
        <Styled.Wrapper>
          <Styled.TitleWrapper>
            <Styled.ProgramTitle>{data.title}</Styled.ProgramTitle>
            <Styled.ProgramSubTitle>{data.subTitle}</Styled.ProgramSubTitle>
          </Styled.TitleWrapper>
          <Styled.ContextWrapper>
            <Styled.ProgramContext>{data.context}</Styled.ProgramContext>
            <Styled.InfoWrapper>
              {[
                { label: "일시", value: data.date },
                { label: "장소", value: data.location },
                { label: "비용", value: data.cost },
                { label: "비고", value: data.notice },
                { label: "신청 마감일", value: data.deadline },
              ].map((info, index) => (
                <Styled.ContextBox key={index}>
                  <Styled.InfoLabel>{info.label}</Styled.InfoLabel>
                  <Styled.InfoValue>{info.value}</Styled.InfoValue>
                </Styled.ContextBox>
              ))}
            </Styled.InfoWrapper>
          </Styled.ContextWrapper>
          <Styled.PosterWrapper>
            <img src={data.poster} alt={data.title} />
            <GreenBtn
              onClick={() => alert(`${data.title} 프로그램 신청 완료!`)}
              $padding="0.38rem 1rem"
              $bgColor="#349989"
              color="white"
              $fontSize="0.875rem"
              $width="10rem"
            >
              프로그램 참여 신청하기
            </GreenBtn>
          </Styled.PosterWrapper>
        </Styled.Wrapper>
      )}
    </Layout>
  );
}
