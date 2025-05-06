import * as Styled from "./MountainBanner.styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mntBannerApi } from "../../../apis/course/courseList/MountainBannerApi";
import { MntBannerItem } from "../../../apis/course/courseList/MountainBannerApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MountainBanner = () => {
  const [mntBanner, setMntBanner] = useState<MntBannerItem>();
  const [mntImg, setMntImg] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const { mnt_id } = useParams();
  const id = parseInt(mnt_id ?? "", 10);

  useEffect(() => {
    if (isNaN(id)) return;

    const fetchMntBanner = async () => {
      try {
        setIsLoading(true);
        const data = await mntBannerApi.getMntBanner(id);
        setMntBanner(data);

        // 이미지 경로 시도: jpg, jpeg, JPG 순
        const name = encodeURIComponent(data.mnt_name);
        const extensions = ["jpg", "jpeg", "JPG"];
        for (const ext of extensions) {
          const imgPath = `/mntImg/${name}.${ext}`;
          const res = await fetch(imgPath, { method: "HEAD" });
          if (res.ok) {
            setMntImg(imgPath);
            break;
          }
        }
      } catch (error) {
        console.error("산 배너 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMntBanner();
  }, [id]);

  if (!mntBanner)
    return (
      <Styled.MountainBannerWrapper>
        <Skeleton width={"100%"} height={"11.875rem"} />
      </Styled.MountainBannerWrapper>
    );

  return (
    <>
      {isLoading ? (
        <Styled.MountainBannerWrapper>
          <Skeleton width={"100%"} height={"11.875rem"} />
        </Styled.MountainBannerWrapper>
      ) : (
        <Styled.MountainBannerWrapper $image={mntImg}>
          <Styled.Title>{mntBanner.mnt_name}</Styled.Title>
          <Styled.Content>{mntBanner.mnt_info}</Styled.Content>
        </Styled.MountainBannerWrapper>
      )}
    </>
  );
};

export default MountainBanner;
