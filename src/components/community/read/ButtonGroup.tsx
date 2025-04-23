import * as Styled from "./styled";

type ButtonGroupProps = {
  mode: string;
  id: number;
};

export default function ButtonGroup({ mode, id }: ButtonGroupProps) {
  const handleEdit = (id: number) => {
    console.log(`${mode === "crew" ? "crew_id" : "review_id"} ${id} 수정`);
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
