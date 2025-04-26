import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

type ButtonGroupProps = {
  mode: string;
  id: number;
};

export default function ButtonGroup({ mode, id }: ButtonGroupProps) {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`${mode === "crew" ? `edit` : "edit"}`);
    console.log(id);
  };

  const handleDelete = (id: number) => {
    console.log(`${mode === "crew" ? "crew_id" : "review_id"} ${id} 삭제`);
  };

  return (
    <Styled.BtnWrapper>
      <Styled.EditBtn onClick={() => handleEdit(id)}>수정하기</Styled.EditBtn>
      <Styled.DeleteBtn onClick={() => handleDelete(id)}>삭제하기</Styled.DeleteBtn>
    </Styled.BtnWrapper>
  );
}
