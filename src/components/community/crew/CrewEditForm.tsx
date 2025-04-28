import * as Styled from "./styled";
import { MdImage } from "react-icons/md";
import { PLACEHOLDERS } from "../../../constants/communityPlaceholder";
import { useState } from "react";
import { GreenBtn } from "../../common/button/GreenBtn";
import { IoMdClose } from "react-icons/io";
import { useImageUpload } from "../../../hooks/useImageUpload";

type CrewEditFormProps = {
  date_info: string;
  nickname: string;
  initialData: {
    title: string;
    content: string;
    image_urls: string[];
  };
  onSubmit?: (postValue: {
    title: string;
    content: string;
    images: (string | File)[];
    deletedImages?: string[];
    existingImages?: string[];
  }) => void;
};

export default function CrewEditForm({ date_info, nickname, initialData, onSubmit }: CrewEditFormProps) {
  const [title, setTitle] = useState<string>(initialData?.title || "");
  const [content, setContent] = useState<string>(initialData?.content || "");

  const {
    previewUrls,
    fileInputRef,
    imageFiles,
    deletedImageUrls,
    handleImageClick,
    handleImageUpload,
    handleRemoveImage,
  } = useImageUpload(initialData?.image_urls || []);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleEditPost = () => {
    const imagesToSend: (string | File)[] = [];

    // 기존 이미지 URL은 그대로 추가
    previewUrls.forEach((url) => {
      if (!url.startsWith("blob:")) {
        imagesToSend.push(url);
      }
    });

    // 새로 업로드된 File 객체들을 추가
    imageFiles.forEach((file) => {
      imagesToSend.push(file);
    });

    if (onSubmit) {
      onSubmit({
        title,
        content,
        images: imagesToSend,
        deletedImages: deletedImageUrls,
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
        <GreenBtn onClick={handleEditPost}>모집글 수정하기</GreenBtn>
      </div>
    </Styled.Wrapper>
  );
}
