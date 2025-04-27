import * as Styled from "./MountainBanner.styled";

// 이미지 폴더 전체 가져오기
const mntImgFolder = import.meta.glob<{ default: string }>("/src/data/mntImg/*.{jpg,jpeg,png}", { eager: true });

const MountainBanner = () => {
  const dummyMountain = {
    title: "도락산",
    content:
      "서울특별시 종로구와 서대문구에 걸쳐있는 고도 338.2 m의 산으로, 바위산에 속한다. 한양도성의 산으로는 북악산보다 3.8 m 낮은 2위이며 평균 경사도는 5.12%이다.",
  };

  console.log("mntImgFolder", mntImgFolder);

  // 산 이름이 포함된 이미지 찾기
  const mntImg = Object.entries(mntImgFolder).find(([path]) => {
    const fileName = path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "")
      .normalize("NFC"); // 한글 정상화 처리
    return fileName === dummyMountain.title.normalize("NFC"); // 한글 파일명 비교
  })?.[1]?.default as string | undefined;

  console.log("mntImg", mntImg);

  return (
    <Styled.MountainBannerWrapper>
      {mntImg && <Styled.BackgroundImage $image={mntImg} />}
      <Styled.TextWrapper>
        <Styled.Title>{dummyMountain.title}</Styled.Title>
        <Styled.Content>{dummyMountain.content}</Styled.Content>
      </Styled.TextWrapper>
    </Styled.MountainBannerWrapper>
  );
};

export default MountainBanner;
