import { useState, useEffect } from "react";
import * as Styled from "./ReviewFilter.styled";
import search from "../../../../assets/icons/search.svg";
import { Mountain, Course, reviewSearchApi } from "../../../../apis/community/ReviewSearchApi";

type MountainFilterProps = {
  mountains: Mountain[];
  initialMountainName?: string;
  onSelectMountain: (mountain: Mountain, sortedCourses: Course[]) => void;
};

export const MountainFilter = ({ mountains, initialMountainName, onSelectMountain }: MountainFilterProps) => {
  const [selectedMountain, setSelectedMountain] = useState<Mountain | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 초기화 효과 최적화
  useEffect(() => {
    if (!initialMountainName || mountains.length === 0) return;

    const initialMountain = mountains.find(
      (m) =>
        m.mnt_name === initialMountainName && (!selectedMountain || selectedMountain.mnt_name !== initialMountainName)
    );

    if (initialMountain) {
      const sortedCourses = [...initialMountain.courses].sort((a, b) => a.course_name.localeCompare(b.course_name));

      // 3. 상태 업데이트 일괄 처리
      setSelectedMountain(initialMountain);
      setSearchTerm(initialMountain.mnt_name);
      onSelectMountain(initialMountain, sortedCourses);
    }
  }, [initialMountainName, mountains]); // onSelectMountain 제거

  const handleSelectMountain = (mountain: Mountain) => {
    const courses = mountain.courses || [];
    const sortedCourses = [...courses].sort((a, b) => a.course_name.localeCompare(b.course_name));

    setSelectedMountain(mountain);
    setIsOpen(false);
    setSearchTerm(mountain.mnt_name);
    onSelectMountain(mountain, sortedCourses);
  };

  useEffect(() => {
    const fetchMountains = async () => {
      try {
        setIsLoading(true);
        const response = await reviewSearchApi.getMnt_course();
        if (response?.result) {
          //setMountains(response.result);
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
