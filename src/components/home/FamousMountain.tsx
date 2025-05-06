import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import mountainDown from "../../assets/icons/mountainRankDown.svg";    .. 상태 api 구현 X
// import mountainUp from "../../assets/icons/mountainRankUp.svg";
// import mountainSame from "../../assets/icons/mountainRankSame.svg";
import mountainMove from "../../assets/icons/mountainMove.svg";
import filter from "../../assets/icons/mountainRankFilter.svg";
import closeFilter from "../../assets/icons/mountainRankFilterClose.svg";
import { famousMountainApi } from "../../apis/home/FamousMountainApi";
import { MountainRankItem } from "../../apis/home/FamousMountainApi";

export const FamousMountain = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mountainRank, setMountainRank] = useState<MountainRankItem[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchMountainRank = async () => {
      try {
        setIsLoading(true);
        const data = await famousMountainApi.getMountainRank();
        setMountainRank(data);
      } catch (error) {
        console.error("산 랭킹 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMountainRank();
  }, []);

  // 3초마다 표시할 산 정보 변경
  useEffect(() => {
    if (!mountainRank.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mountainRank.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mountainRank]);

  // 현재 표시할 산 항목
  const item = mountainRank[currentIndex];

  // filter
  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FamousMountainWrapper>
      <FamousMountainContainer onClick={handleFilterClick}>
        <FamousLabel>인기</FamousLabel>
        {isLoading || mountainRank.length === 0 ? (
          <div> </div>
        ) : (
          <>
            <MountainRank>{item.rank}</MountainRank>
            <MountainName>{item.mountain_name}</MountainName>
            <MountainStatusImageContainer>
              {/* 상태 api 구현 X 
              <MountainStatusImage
            src={
              item.mountain_status === "up" ? mountainUp : item.mountain_status === "down" ? mountainDown : mountainSame
            }
          /> */}
              <FamousMountainFilter src={isOpen ? closeFilter : filter} />
            </MountainStatusImageContainer>
          </>
        )}
      </FamousMountainContainer>

      {isOpen && (
        <Filter>
          <DropdownWrapper $isOpen={isOpen}>
            {mountainRank.map((item) => (
              <DropdownItem key={item.id} onClick={() => navigate(`/courseList/${item.id}`)}>
                <FilterRankNameContainer>
                  <FilterItemRank>{item.rank}</FilterItemRank>
                  <FilterItemName>{item.mountain_name}</FilterItemName>
                </FilterRankNameContainer>
                <FilterItemStatus>
                  {/*  상태 api 구현 X 
                  <MountainStatusImage src={
              item.mountain_status === "up" ? mountainUp : item.mountain_status === "down" ? mountainDown : mountainSame
            } /> */}
                  <MountainStatusImage src={mountainMove} />
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
  cursor: pointer;
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
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
  line-height: normal;

  &:hover {
    background: #b8dbd9;
    color: #349989;
  }

  user-select: none;
  cursor: pointer;
`;

const MountainStatusImage = styled.img`
  cursor: pointer;

  ${DropdownItem}:hover & {
    filter: invert(48%) sepia(13%) saturate(2123%) hue-rotate(129deg) brightness(93%) contrast(87%);
  }
`;
const FilterRankNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

// 필터 항목 내부 스타일 컴포넌트
const FilterItemRank = styled.span`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FilterItemName = styled.span`
  color: #3b3b3b;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FilterItemStatus = styled.div`
  display: flex;
  align-items: center;
`;
