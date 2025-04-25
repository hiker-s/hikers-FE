import * as Styled from "./Search.styled";
import search from "../../assets/icons/Search.svg";
import { SearchErrorModal } from "../common/modal/SearchErrorModal";
import { useState } from "react";

export const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // form submit 기본 동작 방지 (클릭 이벤트 발생 시 isModalOpen 초기값으로 돌아가는 거 방지)
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <SearchErrorModal onClose={handleCloseModal} />}
      <Styled.SearchFormWrapper>
        <Styled.SearchContainer>
          <Styled.SearchIcon src={search} alt="search" />
          <Styled.SearchInput name="search" placeholder="가고 싶은 산을 검색하세요" />
        </Styled.SearchContainer>
        <Styled.SearchButton type="submit" onClick={handleSearch}>
          검색하기
        </Styled.SearchButton>
      </Styled.SearchFormWrapper>
    </>
  );
};
