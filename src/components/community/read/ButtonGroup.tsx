import { communityApi } from "../../../apis/community/CommunityApi";
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
    await communityApi.deleteCrew(id);
    alert("게시글이 삭제되었습니다.");
    navigate(-1);
  };

  return (
    <Styled.BtnWrapper>
      <Styled.EditBtn onClick={() => handleEdit(id)}>수정하기</Styled.EditBtn>
      <Styled.DeleteBtn onClick={() => handleDelete(id)}>삭제하기</Styled.DeleteBtn>
    </Styled.BtnWrapper>
  );
}
