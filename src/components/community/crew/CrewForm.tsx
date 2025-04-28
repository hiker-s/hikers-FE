import * as Styled from "./styled";
import { MdImage } from "react-icons/md";
import { PLACEHOLDERS } from "../../../constants/communityPlaceholder";
import { useState } from "react";
import { GreenBtn } from "../../common/button/GreenBtn";
import { IoMdClose } from "react-icons/io";
import { useImageUpload } from "../../../hooks/useImageUpload";

type CrewFormProps = {
  date_info: string;
  nickname: string;
  onSubmit?: (postValue: { title: string; content: string; images: File[] }) => void;
};

export default function CrewForm({ date_info, nickname, onSubmit }: CrewFormProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { previewUrls, imageFiles, fileInputRef, handleImageClick, handleImageUpload, handleRemoveImage } =
    useImageUpload([]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleWritePost = () => {
    if (onSubmit) {
      onSubmit({
        title,
        content,
        images: imageFiles,
      });
    }
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

        <Styled.ImgInput onClick={handleImageClick}>
          <MdImage size="24" color="#C8C8C8" />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            style={{ display: "none" }}
          />
        </Styled.ImgInput>
      </Styled.ImgInputWrapper>

      {previewUrls.length > 0 && (
        <Styled.ImagePreviewWrapper>
          {previewUrls.map((url, index) => (
            <Styled.ImagePreview key={index}>
              <img src={url} alt={`업로드된 이미지 ${index + 1}`} />
              <Styled.RemoveImageButton onClick={() => handleRemoveImage(index)}>
                <IoMdClose size="20" color="#fff" />
              </Styled.RemoveImageButton>
            </Styled.ImagePreview>
          ))}
        </Styled.ImagePreviewWrapper>
      )}

      <Styled.ContentWrapper>
        <Styled.ContentInput
          placeholder={PLACEHOLDERS["crew"]}
          onChange={handleChangeContent}
          name="content"
          value={content}
          $hasImages={previewUrls.length > 0}
        />
      </Styled.ContentWrapper>

      <div style={{ width: "350px", display: "flex", justifyContent: "flex-end" }}>
        <GreenBtn onClick={handleWritePost}>모집글 게시하기</GreenBtn>
      </div>
    </Styled.Wrapper>
  );
}
