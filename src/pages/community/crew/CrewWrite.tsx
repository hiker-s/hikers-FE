import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import CrewForm from "../../../components/community/crew/CrewForm";

export default function CrewWrite() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate("/community");
  };

  const today = new Date();
  const date_info = `${today.getFullYear()}.${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${today.getDate().toString().padStart(2, "0")}`;

  const nickname = "하이커스";

  const handleSubmit = (data: { title: string; content: string; images: File[] }) => {
    console.log("작성한 글 데이터:", data);
    // navigate("/community");
  };

  return (
    <Layout $margin="6.81rem 0 1rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>크루</Header>
      <CrewForm date_info={date_info} nickname={nickname} onSubmit={handleSubmit} />
    </Layout>
  );
}
