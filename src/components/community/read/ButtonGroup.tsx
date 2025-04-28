import { crewApi } from "../../../apis/community/CrewApi";
import { reviewApi } from "../../../apis/community/ReviewApi";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

type ButtonGroupProps = {
  mode: string;
  id: number;
};

export default function ButtonGroup({ mode, id }: ButtonGroupProps) {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`/community/${mode}/${id}/edit`);
    // console.log(id);
  };

  const handleDelete = async (id: number) => {
    if (mode === "crew") {
      await crewApi.deleteCrew(id);
      alert("크루 게시글이 삭제되었습니다.");
    } else {
      await reviewApi.deleteReview(id);
      alert("리뷰 게시글이 삭제되었습니다.");
    }
    navigate(-1);
  };

  return (
    <Styled.BtnWrapper>
      <Styled.EditBtn onClick={() => handleEdit(id)}>수정하기</Styled.EditBtn>
      <Styled.DeleteBtn onClick={() => handleDelete(id)}>삭제하기</Styled.DeleteBtn>
    </Styled.BtnWrapper>
  );
}
