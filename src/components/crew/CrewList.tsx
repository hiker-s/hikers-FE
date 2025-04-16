import * as Styled from "./CrewList.styled";
import { useState } from "react";
import CrewItem from "../../components/common/item/CrewItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function CrewList() {
  const MOCK_CREWITEMS = [
    {
      id: 1,
      title: "인왕산 크루 구해요 !",
      content: "우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      id: 2,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      id: 3,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      id: 4,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      id: 5,
      title: "인왕산 크루 구해요 !",
      content:
        "우리 인왕산 크루는 등산을 못하더라도 만사 오케이 다 괜찮으니까 가볍게 들어오세요우리 인왕산 크루는 등산을 못하더라도",
    },
    {
      id: 1,
      title: "인왕산 크루 구해요 !",
      content: "우리 인왕산 크루는 등산을 못하더라도",
    },
  ];

  const [crewData] = useState(MOCK_CREWITEMS);

  const onCrewItemClick = (itemId: number) => {
    console.log(`${itemId} 아이템 조회로 이동`);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentItems = crewData.slice(offset, offset + itemsPerPage);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(crewData.length / itemsPerPage) - 1;

  return (
    <Styled.ListWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>크루</Styled.Title>
        <div> 정렬컴포넌트 넣기</div>
      </Styled.TitleWrapper>
      <div>
        <Styled.CrewWrapper>
          {currentItems.map((crew) => (
            <CrewItem
              key={crew.id}
              id={crew.id}
              title={crew.title}
              content={crew.content}
              onCrewItemClick={() => onCrewItemClick(crew.id)}
            />
          ))}
        </Styled.CrewWrapper>
        <Styled.PaginationWrapper>
          <Styled.PagingBtn
            onClick={() => !isFirstPage && setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={isFirstPage}
          >
            <IoIosArrowBack size="100%" />
          </Styled.PagingBtn>
          <Styled.PageNumber>{currentPage + 1}</Styled.PageNumber>
          <Styled.PagingBtn
            onClick={() =>
              !isLastPage && setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(crewData.length / itemsPerPage) - 1))
            }
            disabled={isLastPage}
          >
            <IoIosArrowForward size="100%" />
          </Styled.PagingBtn>
        </Styled.PaginationWrapper>
      </div>
    </Styled.ListWrapper>
  );
}
