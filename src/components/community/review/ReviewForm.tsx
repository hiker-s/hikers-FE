import * as Styled from "./styled";
import { MdImage } from "react-icons/md";
import { useState, useEffect } from "react";
import { GreenBtn } from "../../common/button/GreenBtn";
import { IoMdClose } from "react-icons/io";
import { useImageUpload } from "../../../hooks/useImageUpload";
import { MountainFilter } from "../../common/filter/review/MountainFilter";
import { CourseFilter } from "../../common/filter/review/CourseFilter";
import { reviewSearchApi, Mountain, Course } from "../../../apis/community/ReviewSearchApi";

type ReviewFormProps = {
  date_info: string;
  nickname: string;
  onSubmit?: (postValue: { title: string; content: string; level: string; courseId: number; images: File[] }) => void;
};

export default function ReviewForm({ date_info, nickname, onSubmit }: ReviewFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [level, setLevel] = useState("");
  const [courseId, setCourseId] = useState(0);
  const [mountains, setMountains] = useState<Mountain[]>([]);
  const [selectedMountainId, setSelectedMountainId] = useState<number | null>(null);
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);

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
        level,
        courseId,
        images: imageFiles,
      });
    }
  };

  // 산 데이터 불러오기
  useEffect(() => {
    const fetchMountains = async () => {
      try {
        const response = await reviewSearchApi.getMnt_course();
        setMountains(response?.result || []); // undefined 경우 빈 배열 할당
      } catch (error) {
        console.error("산 데이터 불러오기 실패:", error);
        setMountains([]); // 에러 발생 시 빈 배열 설정
      }
    };
    fetchMountains();
  }, []);

  // 산 선택 시 해당 코스 업데이트
  useEffect(() => {
    if (selectedMountainId !== null) {
      const selectedMountain = mountains.find((m) => m.id === selectedMountainId);
      setAvailableCourses(selectedMountain?.courses || []);
    }
  }, [selectedMountainId, mountains]); // selectedMountainId 변경 시 courses 업데이트

  // 코스 선택 핸들러
  const handleSelectCourse = (courseId: number) => {
    setCourseId(courseId);
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
      <Styled.MntCourseLevelWrapper>
        <Styled.Fieldset>
          <Styled.Label>등반한 산</Styled.Label>
          <MountainFilter
            onSelectMountain={(mountain, sortedCourses) => {
              setSelectedMountainId(mountain.id);
              setAvailableCourses(sortedCourses); // 정렬된 코스 적용
            }}
          />
        </Styled.Fieldset>
        <Styled.Fieldset>
          <Styled.Label>등반한 코스</Styled.Label>
          <CourseFilter courses={availableCourses} onSelectCourse={handleSelectCourse} />
        </Styled.Fieldset>
        <Styled.Fieldset>
          <Styled.Label>난이도</Styled.Label>
          <div style={{ display: "flex", gap: "0.9375rem" }}>
            <Styled.RadioLabel htmlFor="radio1">
              <Styled.LevelRadio
                type="radio"
                name="level"
                value="상"
                id="radio1"
                checked={level === "상"}
                onChange={(e) => setLevel(e.target.value)}
              />
              <Styled.LabelSpan>상급</Styled.LabelSpan>
            </Styled.RadioLabel>
            <Styled.RadioLabel htmlFor="radio2">
              <Styled.LevelRadio
                type="radio"
                name="level"
                value="중"
                id="radio2"
                checked={level === "중"}
                onChange={(e) => setLevel(e.target.value)}
              />
              <Styled.LabelSpan>중급</Styled.LabelSpan>
            </Styled.RadioLabel>
            <Styled.RadioLabel htmlFor="radio3">
              <Styled.LevelRadio
                type="radio"
                name="level"
                value="하"
                id="radio3"
                checked={level === "하"}
                onChange={(e) => setLevel(e.target.value)}
              />
              <Styled.LabelSpan>하급</Styled.LabelSpan>
            </Styled.RadioLabel>
          </div>
        </Styled.Fieldset>
      </Styled.MntCourseLevelWrapper>

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
          placeholder="내용을 입력하세요"
          onChange={handleChangeContent}
          name="content"
          value={content}
        />
      </Styled.ContentWrapper>

      <div style={{ width: "350px", display: "flex", justifyContent: "flex-end" }}>
        <GreenBtn onClick={handleWritePost}>리뷰 게시하기</GreenBtn>
      </div>
    </Styled.Wrapper>
  );
}
