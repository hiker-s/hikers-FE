import { useState, useEffect } from "react";
import * as Styled from "./ReviewFilter.styled";
import search from "../../../../assets/icons/search.svg";
import { Mountain, Course, reviewSearchApi } from "../../../../apis/community/ReviewSearchApi";

type MountainFilterProps = {
  onSelectMountain: (mountain: Mountain, sortedCourses: Course[]) => void; // 추가된 부분
};

export const MountainFilter = ({ onSelectMountain }: MountainFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mountains, setMountains] = useState<Mountain[]>([]);
  const [selectedMountain, setSelectedMountain] = useState<Mountain | null>(null);

  const handleSelectMountain = (mountain: Mountain) => {
    const courses = mountain.courses || [];
    const sortedCourses = [...courses].sort((a, b) => a.course_name.localeCompare(b.course_name));

    // 1. 상태 업데이트 누락
    setSelectedMountain(mountain); // 추가
    setIsOpen(false); // 드롭다운 닫기

    // 2. 상위 컴포넌트로 데이터 전달
    onSelectMountain(mountain, sortedCourses);
    console.log("Selected Mountain:", mountain);
  };

  //  const [availableCourses, setAvailableCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchMountains = async () => {
      try {
        setIsLoading(true);
        const response = await reviewSearchApi.getMnt_course();
        if (response?.result) {
          setMountains(response.result);
        }
      } catch (error) {
        console.error("산/코스 전체 데이터 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMountains();
  }, []);

  const handleChangeMountain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (selectedMountain) setSelectedMountain(null);
    setIsOpen(true);
  };

  //   const handleSelectMountain = (mountain: Mountain) => {
  //     setSelectedMountain(mountain);
  //     onSelectMountain(mountain);
  //     setIsOpen(false);
  //   };

  //   const onSelectMountain = (mountain: Mountain) => {
  //     const courses = mountain.courses || [];

  //     // course_name 기준 오름차순 정렬
  //     const sortedCourses = [...courses].sort((a, b) => a.course_name.localeCompare(b.course_name));

  //     setAvailableCourses(sortedCourses); // 정렬된 배열 전달
  //     console.log(sortedCourses);
  //   };

  const filteredMountains = mountains.filter((mnt) => mnt.mnt_name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Styled.Filter>
      <Styled.Input
        placeholder="등반한 산 이름을 입력해주세요"
        value={selectedMountain ? selectedMountain.mnt_name : searchTerm}
        onChange={handleChangeMountain}
        onFocus={() => setIsOpen(true)}
      />
      <Styled.SearchImg src={search} alt="search" />

      <Styled.DropdownWrapper $isOpen={isOpen || isLoading}>
        {isLoading ? (
          <Styled.DropdownItem>데이터를 불러오는 중...</Styled.DropdownItem>
        ) : filteredMountains.length > 0 ? (
          filteredMountains.map((mnt) => (
            <Styled.DropdownItem key={mnt.id} onClick={() => handleSelectMountain(mnt)}>
              {mnt.mnt_name}
            </Styled.DropdownItem>
          ))
        ) : (
          <Styled.DropdownItem>검색 결과가 없습니다</Styled.DropdownItem>
        )}
      </Styled.DropdownWrapper>
    </Styled.Filter>
  );
};
