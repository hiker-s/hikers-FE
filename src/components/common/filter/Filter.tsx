import { useState } from "react";
import * as Styled from "./Filter.styled";
import filterImg from "../../../assets/icons/filter.svg";

interface FilterProps {
  filter: string;
  isReview?: boolean;
  onTypeChange: (newType: string) => void;
}

export const Filter = ({ filter, isReview = false, onTypeChange }: FilterProps) => {
  const [selectedType, setSelectedType] = useState(filter);
  const [isOpen, setIsOpen] = useState(false);

  const reviewTypes = ["최신순", "인기순"];
  const courseTypes = ["가나다순", "난이도순", "리뷰순", "스크랩순"];
  const currentTypes = isReview ? reviewTypes : courseTypes;

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (newFilter: string) => {
    setSelectedType(newFilter);
    onTypeChange(newFilter);
    setIsOpen(false);
  };

  return (
    <Styled.Filter onClick={handleFilterClick}>
      {selectedType}
      <img src={filterImg} alt="types" />
      <Styled.DropdownWrapper $isOpen={isOpen}>
        {currentTypes.map((item) => (
          <Styled.DropdownItem
            key={item}
            $isSelected={selectedType === item}
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
