import * as Styled from "./CrewList.styled";
import { useState } from "react";
import CrewItem from "../item/CrewItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type CrewItemDataProps = {
  id: number;
  image_urls?: string[];
  title: string;
  content: string;
};

type CrewListProps = {
  crew_data: CrewItemDataProps[];
};

export default function CrewList({ crew_data }: CrewListProps) {
  const navigate = useNavigate();

  const onCrewItemClick = (itemId: number) => {
    navigate(`crew/${itemId}`);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentItems = crew_data.slice(offset, offset + itemsPerPage);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(crew_data.length / itemsPerPage) - 1;

  return (
    <Styled.ListWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>크루</Styled.Title>
      </Styled.TitleWrapper>
      <div>
        <Styled.CrewWrapper>
          {currentItems.map((crew) => (
            <CrewItem
              key={crew.id}
              id={crew.id}
              title={crew.title}
              content={crew.content}
              image_urls={crew.image_urls}
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
              !isLastPage &&
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(crew_data.length / itemsPerPage) - 1))
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
