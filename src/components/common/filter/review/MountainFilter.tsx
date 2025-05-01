import { useState } from "react";
import * as Styled from "./ReviewFilter.styled";
import search from "../../../../assets/icons/search.svg";
import { Mountain } from "../../../../apis/community/ReviewSearchApi";

interface MountainFilterProps {
  mountains: Mountain[];
  onSelectMountain: (mountainId: number) => void;
}

export const MountainFilter = ({ mountains, onSelectMountain }: MountainFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMountain, setSelectedMountain] = useState<Mountain | null>(null);

  const filteredMountains = mountains.filter((mountain) =>
    mountain.mnt_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectMountain = (mountain: Mountain) => {
    setSelectedMountain(mountain);
    onSelectMountain(mountain.id);
    setIsOpen(false);
  };

  return (
    <Styled.Filter>
      <Styled.Input
        placeholder="등반한 산 이름을 입력해주세요"
        value={selectedMountain ? selectedMountain.mnt_name : searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsOpen(true);
        }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Styled.SearchImg src={search} alt="search" />
      <Styled.DropdownWrapper $isOpen={isOpen}>
        {filteredMountains.map((mountain) => (
          <Styled.DropdownItem key={mountain.id} onClick={() => handleSelectMountain(mountain)}>
            {mountain.mnt_name}
          </Styled.DropdownItem>
        ))}
      </Styled.DropdownWrapper>
    </Styled.Filter>
  );
};
