import * as Styled from "./styled";
import { MdImage } from "react-icons/md";
import { useState, useEffect, useCallback } from "react";
import { GreenBtn } from "../../common/button/GreenBtn";
import { IoMdClose } from "react-icons/io";
import { useImageUpload } from "../../../hooks/useImageUpload";
import { MountainFilter } from "../../common/filter/review/MountainFilter";
import { CourseFilter } from "../../common/filter/review/CourseFilter";
import { reviewSearchApi, Mountain, Course } from "../../../apis/community/ReviewSearchApi";

type ReviewEditFormProps = {
  date_info: string;
  nickname: string;
  initialData: {
    title: string;
    content: string;
    level: string;
    courseId: number;
    image_urls: string[];
    mountain_name?: string;
    course_name?: string;
  };
  onSubmit?: (postValue: {
    title: string;
    content: string;
    level: string;
    courseId: number;
    images: (File | string)[];
    deletedImages?: string[];
  }) => void;
};

export default function ReviewEditForm({ date_info, nickname, initialData, onSubmit }: ReviewEditFormProps) {
  // 상태 관리
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);
  const [level, setLevel] = useState(initialData.level);
  const [courseId, setCourseId] = useState(initialData.courseId);
  const [mountains, setMountains] = useState<Mountain[]>([]);
  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);

  // 이미지 업로드 훅
  const {
    previewUrls,
    fileInputRef,
    imageFiles,
    deletedImageUrls,
    handleImageClick,
    handleImageUpload,
    handleRemoveImage,
  } = useImageUpload(initialData.image_urls || []);

  useEffect(() => {
    const fetchMountains = async () => {
      try {
        const response = await reviewSearchApi.getMnt_course();
        if (!response?.result) return;

        const allMountains = response.result;
        setMountains(allMountains);

        // 1. 산 찾기 (대소문자 무시)
        const initialMountain = allMountains.find(
          (m) => m.mnt_name.toLowerCase() === initialData.mountain_name?.toLowerCase()
        );

        if (!initialMountain) return;

        // 2. 코스 정렬
        const sortedCourses = [...initialMountain.courses].sort((a, b) => a.course_name.localeCompare(b.course_name));
        setAvailableCourses(sortedCourses);

        // 3. 이름으로 코스 찾기
        const targetCourse = sortedCourses.find((c) => c.course_name === initialData.course_name);

        if (targetCourse) {
          setCourseId(targetCourse.id);
          // console.log("코스 매핑 성공:", targetCourse);
        }
      } catch (error) {
        console.error("데이터 초기화 실패:", error);
      }
    };
    fetchMountains();
  }, [initialData.mountain_name, initialData.course_name]);

  // 산 선택
  const handleSelectMountain = useCallback((mountain: Mountain, sortedCourses: Course[]) => {
    console.log(mountain);
    setAvailableCourses(sortedCourses);
    setCourseId(0);
  }, []);

  // 코스 선택
  const handleSelectCourse = useCallback((selectedCourseId: number) => {
    setCourseId(selectedCourseId);
  }, []);

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

    // console.log(imagesToSend);

    if (onSubmit) {
      onSubmit({
        title,
        content,
        level,
        courseId,
        images: imagesToSend,
        deletedImages: deletedImageUrls,
      });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TitleInput placeholder="제목을 입력하세요" onChange={(e) => setTitle(e.target.value)} value={title} />

      <Styled.MntCourseLevelWrapper>
        <Styled.Fieldset>
          <Styled.Label>등반한 산</Styled.Label>
          <MountainFilter
            mountains={mountains}
            initialMountainName={initialData.mountain_name}
            onSelectMountain={handleSelectMountain}
          />
        </Styled.Fieldset>

        <Styled.Fieldset>
          <Styled.Label>등반한 코스</Styled.Label>
          <CourseFilter
            courses={availableCourses}
            initialCourseName={initialData.course_name}
            onSelectCourse={handleSelectCourse}
          />
        </Styled.Fieldset>

        <Styled.Fieldset>
          <Styled.Label>난이도</Styled.Label>
          <div style={{ display: "flex", gap: "0.9375rem" }}>
            {["상", "중", "하"].map((value, index) => (
              <Styled.RadioLabel key={value} htmlFor={`radio${index + 1}`}>
                <Styled.LevelRadio
                  type="radio"
                  name="level"
                  value={value}
                  id={`radio${index + 1}`}
                  checked={level === value}
                  onChange={(e) => setLevel(e.target.value)}
                />
                <Styled.LabelSpan>{["상급", "중급", "하급"][index]}</Styled.LabelSpan>
              </Styled.RadioLabel>
            ))}
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
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Styled.ContentWrapper>

      <div style={{ width: "350px", display: "flex", justifyContent: "flex-end" }}>
        <GreenBtn onClick={handleEditPost}>리뷰 수정하기</GreenBtn>
      </div>
    </Styled.Wrapper>
  );
}
