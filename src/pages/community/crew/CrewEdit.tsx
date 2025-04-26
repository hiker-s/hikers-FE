import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import CrewForm from "../../../components/community/crew/CrewForm";
import { useState } from "react";

export default function CrewEdit() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };

  const today = new Date();
  const date_info = `${today.getFullYear()}.${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${today.getDate().toString().padStart(2, "0")}`;

  const nickname = "하이커스";

  const EDIT_DATA = {
    title: "크루 모집 제목입니다.",
    content: "크루 모집 내용입니다.",
    image_urls: [
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjBfMjky%2FMDAxNzI5NDA1OTcwNzEz.vgbx7hvDEulsx48OE4T8wwTH_bnAX5CNBU_Y2WiEkfgg.D3M27ocuqJld1BaoXaurFg8JuoC3F1vD9o2vxjY6w0sg.JPEG%2FKakaoTalk_20241020_151047702_15.jpg&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130916_18%2Fjisan80_137929009080279rQi_JPEG%2F1-%25BA%25D2%25BE%25CF2-1300.jpg&type=sc960_832",
    ],
  };

  const [initialData] = useState(EDIT_DATA);

  const handleSubmit = (data: { title: string; content: string; images: File[] }) => {
    console.log("수정된 데이터:", data);
    // navigate(-1);
  };

  return (
    <Layout $margin="6.81rem 0 1rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>크루</Header>
      <CrewForm
        date_info={date_info}
        nickname={nickname}
        isEdit={true}
        initialData={initialData}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
}
