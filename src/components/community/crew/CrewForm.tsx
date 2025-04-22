import * as Styled from "./CrewForm.styled";
import { MdImage } from "react-icons/md";
import { PLACEHOLDERS } from "../../../constants/communityPlaceholder";
import { useState } from "react";
import { GreenBtn } from "../../common/button/GreenBtn";

type CrewFormProps = {
  date_info: string;
  nickname: string;
};

export default function CrewForm({ date_info, nickname }: CrewFormProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleWritePost = () => {
    console.log("글 작성 버튼 클릭");
  };

  return (
    <Styled.Wrapper>
      <Styled.TitleInput
        placeholder="제목을 입력하세요"
        onChange={handleChangeTitle}
        type="text"
        name="title"
        value={title}
      />
      <Styled.ImgInputWrapper>
        <Styled.WriteInfo>
          <div style={{ fontWeight: 400 }}>{date_info}</div>
          <div style={{ fontWeight: 700 }}>{nickname}</div>
        </Styled.WriteInfo>
        <Styled.ImgInput>
          <MdImage size="24" color="#C8C8C8" />
        </Styled.ImgInput>
      </Styled.ImgInputWrapper>
      <Styled.ContentWrapper>
        <Styled.ContentInput
          placeholder={PLACEHOLDERS["crew"]}
          onChange={handleChangeContent}
          name="content"
          value={content}
        />
      </Styled.ContentWrapper>
      <div style={{ width: "350px", display: "flex", justifyContent: "flex-end" }}>
        <GreenBtn onClick={handleWritePost}>모집글 게시하기</GreenBtn>
      </div>
    </Styled.Wrapper>
  );
}
