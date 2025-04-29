import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import { useEffect, useState } from "react";
import { mypageApi } from "../../../apis/mypage/MypageApi";
import { crewApi, CrewDetail } from "../../../apis/community/CrewApi";
import CrewEditForm from "../../../components/community/crew/CrewEditForm";

export default function CrewEdit() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ nickname: string }[]>([]);

  const { crew_id } = useParams();
  const id = parseInt(crew_id ?? "", 10);

  const handleBackBtn = () => {
    navigate(-1);
  };

  const today = new Date();
  const date_info = `${today.getFullYear()}.${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${today.getDate().toString().padStart(2, "0")}`;

  const [initialData, setInitialData] = useState<CrewDetail>();

  const handleSubmit = async (putValue: { title: string; content: string; images: (string | File)[] }) => {
    try {
      // console.log("수정된 데이터:", putValue);

      // const response = await crewApi.putCrew(id, putValue);
      await crewApi.putCrew(id, putValue);
      // console.log("수정된 크루 게시글:", response);

      navigate(-1);
    } catch (error) {
      console.error("크루 게시글 수정 실패:", error);
    }
  };

  useEffect(() => {
    const fetchCrewDetail = async (id: number) => {
      try {
        const crew = await crewApi.getCrewDetail(id);
        setInitialData(crew);
        console.log(crew);
      } catch (error) {
        console.error("크루 글 상세 데이터 가져오기 실패:", error);
      }
    };

    if (!isNaN(id)) {
      fetchCrewDetail(id);
    }

    const fetchUserInfo = async () => {
      try {
        const user = await mypageApi.getUserInfo();
        setUserInfo(user);
      } catch (error) {
        console.error("유저 정보 받아오기 실패:", error);
      }
    };

    fetchUserInfo();
  }, [id]);

  return (
    <Layout $margin="6.81rem 0 1rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>크루</Header>
      {initialData ? (
        <CrewEditForm
          date_info={date_info}
          nickname={userInfo[0]?.nickname}
          initialData={initialData}
          onSubmit={handleSubmit}
        />
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  );
}
