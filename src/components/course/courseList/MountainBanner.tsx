import * as Styled from "./MountainBanner.styled";

const MountainBanner = () => {
  const dummyMountain = {
    image: "https://picsum.photos/200/300",
    title: "인왕산",
    content:
      "서울특별시 종로구와 서대문구에 걸쳐있는 고도 338.2 m의 산으로, 바위산에 속한다. 한양도성의 산으로는 북악산보다 3.8 m 낮은 2위이며 평균 경사도는 5.12%이다.",
  };
  return (
    <Styled.MountainBannerWrapper>
      <Styled.BackgroundImage $image={dummyMountain.image} />
      <Styled.TextWrapper>
        <Styled.Title>{dummyMountain.title}</Styled.Title>
        <Styled.Content>{dummyMountain.content}</Styled.Content>
      </Styled.TextWrapper>
    </Styled.MountainBannerWrapper>
  );
};

export default MountainBanner;
