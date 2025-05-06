import * as Styled from "./Search.styled";
import search from "@/assets/icons/Search.svg";
import { SearchErrorModal } from "../common/modal/SearchErrorModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mnt_ids from "../../data/mnt_ids.json";

export const Search = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // form submit 기본 동작 방지 (클릭 이벤트 발생 시 isModalOpen 초기값으로 돌아가는 거 방지)

    const matched = mnt_ids.find((item) => item.mnt_name === searchInput.trim());

    if (matched) {
      navigate(`/courseList/${matched.mnt_id}`);
    } else {
      setIsModalOpen(true);
      setSearchInput("");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <SearchErrorModal onClose={handleCloseModal} />}
      <Styled.SearchFormWrapper onSubmit={handleSearch}>
        <Styled.SearchContainer>
          <Styled.SearchIcon src={search} alt="search" />
          <Styled.SearchInput
            name="search"
            placeholder="가고 싶은 산을 검색하세요"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </Styled.SearchContainer>
        <Styled.SearchButton type="submit">검색하기</Styled.SearchButton>
      </Styled.SearchFormWrapper>
    </>
  );
};
