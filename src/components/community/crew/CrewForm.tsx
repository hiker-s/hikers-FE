import * as Styled from "./CrewForm.styled";
import { MdImage } from "react-icons/md";
import { PLACEHOLDERS } from "../../../constants/communityPlaceholder";
import { useState, useRef } from "react";
import { GreenBtn } from "../../common/button/GreenBtn";
import { IoMdClose } from "react-icons/io";

type CrewFormProps = {
  date_info: string;
  nickname: string;
};

export default function CrewForm({ date_info, nickname }: CrewFormProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleWritePost = () => {
    console.log("글 작성 버튼 클릭");
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const imageFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));

    if (images.length + imageFiles.length > 3) {
      alert("이미지는 최대 3장까지만 업로드할 수 있습니다.");
      return;
    }

    const newImages = imageFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
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
      {images.length > 0 && (
        <Styled.ImagePreviewWrapper>
          {images.map((image, index) => (
            <Styled.ImagePreview key={index}>
              <img src={image} alt={`미리보기 이미지 ${index + 1} 장`} />
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
          hasImages={images.length > 0}
        />
      </Styled.ContentWrapper>
      <div
        style={{
          position: "relative",
          left: "65%",
        }}
      >
        <GreenBtn onClick={handleWritePost}>모집글 게시하기</GreenBtn>
      </div>
    </Styled.Wrapper>
  );
}
