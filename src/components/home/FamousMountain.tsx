import { useEffect, useState } from "react";
import styled from "styled-components";
import mountainDown from "../../assets/icons/mountainRankDown.svg";
import mountainUp from "../../assets/icons/mountainRankUp.svg";
import mountainSame from "../../assets/icons/mountainRankSame.svg";
import filter from "../../assets/icons/mountainRankFilter.svg";
import closefilter from "../../assets/icons/mountainRankFilterClose.svg";

export const FamousMountain = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const mock_mountain_rank = [
    { id: 1, rank: 1, mountain_name: "인왕산", mountain_status: "same" },
    { id: 2, rank: 2, mountain_name: "북한산", mountain_status: "down" },
    { id: 3, rank: 3, mountain_name: "북악산", mountain_status: "same" },
    { id: 4, rank: 4, mountain_name: "관악산", mountain_status: "up" },
    { id: 5, rank: 5, mountain_name: "수락산", mountain_status: "down" },
  ];

  const [mountain_rank] = useState(mock_mountain_rank);

  // 3초마다 표시할 산 정보 변경
  useEffect(() => {
    if (!mountain_rank) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mountain_rank.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mountain_rank]);

  // 현재 표시할 산 항목
  const item = mountain_rank[currentIndex];

  // filter
  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FamousMountainWrapper>
      <FamousMountainContainer>
        <FamousLabel>인기</FamousLabel>
        <MountainRank>{item.rank}</MountainRank>
        <MountainName>{item.mountain_name}</MountainName>
        <MountainStatusImageContainer>
          <MountainStatusImage
            src={
              item.mountain_status === "up" ? mountainUp : item.mountain_status === "down" ? mountainDown : mountainSame
            }
            onClick={handleFilterClick}
          />
          <FamousMountainFilter src={isOpen ? closefilter : filter} onClick={handleFilterClick} />
        </MountainStatusImageContainer>
      </FamousMountainContainer>

      {isOpen && (
        <Filter>
          <DropdownWrapper $isOpen={isOpen}>
            {mountain_rank.map((filterItem) => (
              <DropdownItem key={filterItem.id}>
                <FilterRankNameContainer>
                  <FilterItemRank>{filterItem.rank}</FilterItemRank>
                  <FilterItemName>{filterItem.mountain_name}</FilterItemName>
                </FilterRankNameContainer>
                <FilterItemStatus>
                  <MountainStatusImage
                    src={
                      filterItem.mountain_status === "up"
                        ? mountainUp
                        : filterItem.mountain_status === "down"
                          ? mountainDown
                          : mountainSame
                    }
                  />
                </FilterItemStatus>
              </DropdownItem>
            ))}
          </DropdownWrapper>
        </Filter>
      )}
    </FamousMountainWrapper>
  );
};

// 전체 컴포넌트를 감싸는 컨테이너 추가
const FamousMountainWrapper = styled.div`
  position: relative;
  width: 10.4375rem;
`;

const FamousMountainContainer = styled.div`
  position: relative;
  width: 10.4375rem;
  height: 2.125rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #eee;

  user-select: none;
`;

const FamousLabel = styled.div`
  position: absolute;
  top: 0.37rem;
  left: 0.44rem;
  display: inline-flex;
  padding: 0.1875rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4375rem;
  background: #a7d3c4;
  color: #349989;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MountainRank = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 3.67rem;
  color: #a4a4a4;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MountainName = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 4.56rem;
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MountainStatusImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100%;
  right: 0.7rem;
  gap: 0.4rem;
`;

const MountainStatusImage = styled.img`
  cursor: pointer;
`;

const FamousMountainFilter = styled.img`
  cursor: pointer;
`;

//filter
const Filter = styled.div`
  position: relative;
`;

const DropdownWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0.38rem;
  right: 0;
  display: flex;
  width: 10.375rem;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3125rem;
  border-radius: 0.625rem;
  background: #eee;
  z-index: 10;
`;

const DropdownItem = styled.div`
  display: flex;
  padding: 0.4375rem 0.625rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  background: #fff;

  color: #a4a4a4;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
  line-height: normal;

  &:hover {
    background: #b8dbd9;
    color: #349989;
  }

  user-select: none;
`;

const FilterRankNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

// 필터 항목 내부 스타일 컴포넌트
const FilterItemRank = styled.span`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FilterItemName = styled.span`
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FilterItemStatus = styled.div`
  display: flex;
  align-items: center;
`;
