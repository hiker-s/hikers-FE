import * as Styled from "./CrewList.styled";
import { useState } from "react";
import CrewItem from "../item/CrewItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type CrewItemDataProps = {
  crew_id: number;
  images?: string;
  title: string;
  content: string;
};

type CrewListProps = {
  crew_data: CrewItemDataProps[];
};

export default function CrewList({ crew_data }: CrewListProps) {
  const navigate = useNavigate();
  const [crewData] = useState<CrewItemDataProps[]>(crew_data);

  const onCrewItemClick = (itemId: number) => {
    navigate(`crew/${itemId}`);
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
      </Styled.TitleWrapper>
      <div>
        <Styled.CrewWrapper>
          {currentItems.map((crew) => (
            <CrewItem
              key={crew.crew_id}
              crew_id={crew.crew_id}
              title={crew.title}
              content={crew.content}
              onCrewItemClick={() => onCrewItemClick(crew.crew_id)}
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
