import * as Styled from "./MountainBanner.styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mntBannerApi } from "../../../apis/course/courseList/MountainBannerApi";
import { MntBannerItem } from "../../../apis/course/courseList/MountainBannerApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// 이미지 폴더 전체 가져오기
const mntImgFolder = import.meta.glob<{ default: string }>("/src/data/mntImg/*.{jpg,jpeg,png}", { eager: true });

const MountainBanner = () => {
  const [mntBanner, setMntBanner] = useState<MntBannerItem>();
  const [isLoading, setIsLoading] = useState(false);

  const { mnt_id } = useParams();
  const id = parseInt(mnt_id ?? "", 10);

  useEffect(() => {
    if (isNaN(id)) return; // 잘못된 id면 API 호출하지 않음

    const fetchMntBanner = async () => {
      try {
        setIsLoading(true);
        const data = await mntBannerApi.getMntBanner(id);
        setMntBanner(data);
      } catch (error) {
        console.error("산 배너 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMntBanner();
  }, [id]);

  // console.log("mntImgFolder", mntImgFolder);

  if (!mntBanner)
    return (
      <Styled.MountainBannerWrapper>
        <Skeleton width={"100%"} height={"11.875rem"} />
      </Styled.MountainBannerWrapper>
    ); // mntBanner가 아직 없을 때 return null 처리

  // 산 이름이 포함된 이미지 찾기
  const mntImg = Object.entries(mntImgFolder).find(([path]) => {
    const fileName = path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "")
      .normalize("NFC"); // 한글 정상화 처리
    return fileName === mntBanner.mnt_name.normalize("NFC"); // 한글 파일명 비교
  })?.[1]?.default as string | undefined;

  // console.log("mntImg", mntImg);

  return (
    <Styled.MountainBannerWrapper>
      {isLoading ? (
        <Skeleton width={"100%"} height={"11.875rem"} />
      ) : (
        <>
          {mntImg && <Styled.BackgroundImage $image={mntImg} />}
          <Styled.TextWrapper>
            <Styled.Title>{mntBanner.mnt_name}</Styled.Title>
            <Styled.Content>{mntBanner.mnt_info}</Styled.Content>
          </Styled.TextWrapper>
        </>
      )}
    </Styled.MountainBannerWrapper>
  );
};

export default MountainBanner;
