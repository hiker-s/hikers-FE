import { useState } from "react";
import * as Styled from "./styled";
import filterImg from "../../../assets/filter.svg";

interface FilterProps {
  filter: string;
  isReview: boolean;
  onFilterChange: (newFilter: string) => void;
}

export const Filter = ({ filter, isReview, onFilterChange }: FilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState(filter);
  const [isOpen, setIsOpen] = useState(false);

  const reviewFilters = ["최신순", "인기순"];
  const courseFilters = ["가나다순", "난이도순", "리뷰순", "스크랩순"];
  const currentFilters = isReview ? reviewFilters : courseFilters;

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (newFilter: string) => {
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
    setIsOpen(false);
  };

  return (
    <Styled.Filter onClick={handleFilterClick}>
      {selectedFilter}
      <img src={filterImg} alt="filter" />
      <Styled.DropdownWrapper $isOpen={isOpen}>
        {currentFilters.map((item) => (
          <Styled.DropdownItem
            key={item}
            $isSelected={selectedFilter === item}
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(item);
            }}
          >
            {item}
          </Styled.DropdownItem>
        ))}
      </Styled.DropdownWrapper>
    </Styled.Filter>
  );
};
