import * as Styled from "./SketchMap.styled";
import useNaverMap from "../../../hooks/useNaverMap";
import { Section } from "../../../types/naverMap";
import course_ids from "../../../data/course_ids.json"; // 1. course_ids, MountainData import 해주기
import { MountainData } from "../../../types/mountainData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

const SketchMap = () => {
  const [courseData, setCourseData] = useState<MountainData | null>(null); // 2. 여기에도 MountainData useState로 설정해줘야 돼요
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  // 3. 여기서부터 course_id로 course_ids.json에서 코스 데이터 경로 가져오기 시작
  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);

  useEffect(() => {
    const loadMountainData = async () => {
      try {
        setLoading(true);

        // 3-1) course_ids에서 코스 데이터 경로 찾기
        const mnt_course = course_ids.find((item) => Number(item.course_id) === id);

        // 유효한 코스를 찾았는지 확인
        if (!mnt_course?.courseFilePath) {
          setError("코스 정보를 찾을 수 없습니다.");
          setLoading(false);
          return;
        }

        // console.log("Found course path:", mnt_course.courseFilePath);

        // 3-2-1) 직접적인 동적 import 방식
        try {
          const dataModule = await import(`../../../data/mnt/${mnt_course.courseFilePath}`);
          setCourseData(dataModule.default);
          setLoading(false);
        } catch (importError) {
          console.error("파일 불러오기 실패:", importError);

          // 3-2-1) 대체 방법: glob 방식 사용
          const modules: Record<string, { default: MountainData }> = import.meta.glob("../../../data/mnt/**/*.json", {
            eager: true,
          });
          // console.log("Available modules:", Object.keys(modules));

          // 3-3) 코스.json 경로지정해서 불러오기
          const targetPath = `../../../data/mnt/${mnt_course.courseFilePath}`;
          const data = modules[targetPath];

          if (data) {
            setCourseData(data.default);
            setLoading(false);
          } else {
            setError(`코스 데이터를 찾을 수 없습니다: ${mnt_course.courseFilePath}`);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("데이터 로딩 오류:", err);
        setError("코스 데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    loadMountainData();
  }, [id]);

  // ++ SketchMap에서 useNaverMap을 사용하기 위한 설정 ---
  // 코스 데이터에서 sections 구성하기 (네이버 지도에 표시할 트랙)
  const sections = useMemo<Section[]>(() => {
    if (!courseData || !courseData.track) return [];

    // courseData.track을 네이버 지도 API에 맞는 Section 형태로 변환
    return courseData.track.map((segment) => ({
      path: segment.path,
      color: segment.color || "#3f611f", // 기본 색상 설정
      start_name: segment.start_name,
      end_name: segment.end_name,
    }));
  }, [courseData]);

  // 네이버 지도 초기화
  const { mapRef, isMapReady } = useNaverMap({
    sections,
    // 첫 번째 트랙의 첫 번째 좌표로 중심 설정 (없으면 기본값 사용)
    initialCenter: sections[0]?.path[0] || undefined,
    initialZoom: 12,
  });

  // 지도가 준비되면 초기화 상태 업데이트
  useEffect(() => {
    if (isMapReady && !mapInitialized) {
      setMapInitialized(true);
    }
  }, [isMapReady, mapInitialized]);

  // 4. courseData 불러오기 전에 return 될 내용 - 매번 되기 때문에 loading과 같은 스켈레톤으로 구상
  if (loading || error || !courseData) {
    return (
      <Styled.SketchMapWrapper>
        <Styled.CourseInfoTitle>약도</Styled.CourseInfoTitle>
        <Styled.MapContainer>
          <Skeleton height="100%" className="map-inner" />
          {error && <div className="error-message">{error}</div>}
        </Styled.MapContainer>
      </Styled.SketchMapWrapper>
    );
  }

  return (
    <Styled.SketchMapWrapper>
      <Styled.CourseInfoTitle>약도</Styled.CourseInfoTitle>
      <Styled.MapContainer>
        <div ref={mapRef} className="map-inner" />
        {!mapInitialized && <div className="loading-overlay">지도를 불러오는 중...</div>}
      </Styled.MapContainer>
    </Styled.SketchMapWrapper>
  );
};

export default SketchMap;
