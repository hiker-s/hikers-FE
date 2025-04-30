import { useEffect, useRef, useCallback, useState } from "react";
import { NaverMapInstance, NaverPolylineInstance, Section, LatLng, NaverGlobal } from "../types/naverMap";

interface UseNaverMapOptions {
  sections: Section[];
  initialCenter?: LatLng;
  initialZoom?: number;
}

const useNaverMap = ({ sections, initialCenter, initialZoom = 14 }: UseNaverMapOptions) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<NaverMapInstance | null>(null);
  const polylines = useRef<NaverPolylineInstance[]>([]);
  const [isMapReady, setIsMapReady] = useState(false);

  // 네이버 지도 초기화 함수
  const initializeMap = useCallback(() => {
    if (!mapRef.current) {
      console.error("지도 컨테이너를 찾을 수 없습니다.");
      return false;
    }

    // 네이버 지도 SDK 확인
    const naver = (window as unknown as { naver?: NaverGlobal }).naver;
    if (!naver?.maps) {
      console.error("네이버 지도 SDK가 로드되지 않았습니다.");
      return false;
    }

    try {
      const { maps } = naver;

      // 지도 중심점 설정 (제공된 값 또는 첫 번째 경로 포인트 또는 기본값)
      const center =
        initialCenter ||
        (sections.length > 0 && sections[0].path.length > 0 ? sections[0].path[0] : { lat: 37.5665, lng: 126.978 }); // 기본값은 서울 중심부

      console.log("지도 중심점:", center);

      // 이미 지도가 있으면 제거
      if (mapInstance.current) {
        polylines.current.forEach((polyline) => polyline.setMap(null));
        mapInstance.current.destroy();
      }

      // 새 지도 생성
      mapInstance.current = new maps.Map(mapRef.current, {
        center: new maps.LatLng(center.lat, center.lng),
        zoom: initialZoom,
        zoomControl: true,
        zoomControlOptions: {
          position: maps.Position.TOP_RIGHT,
        },
      });

      // 기존 라인 초기화
      polylines.current.forEach((polyline) => polyline.setMap(null));
      polylines.current = [];

      // 각 경로 섹션별로 polyline 생성
      if (sections.length > 0) {
        console.log(`${sections.length}개의 섹션 그리기 시작`);

        sections.forEach((section, index) => {
          if (!section.path || section.path.length < 2) {
            console.warn(`경로 섹션 #${index}에 충분한 좌표가 없습니다.`);
            return;
          }

          // 경로 좌표를 네이버 지도 좌표 객체로 변환
          const path = section.path.map((coord) => new maps.LatLng(coord.lat, coord.lng));

          // Polyline 생성
          const polyline = new maps.Polyline({
            map: mapInstance.current,
            path,
            strokeColor: section.color || "#FF0000", // 기본 색상은 빨간색
            strokeWeight: 4,
            strokeOpacity: 0.8,
          });

          polylines.current.push(polyline);
        });

        console.log(`${polylines.current.length}개의 경로 그리기 완료`);
      } else {
        console.warn("그릴 경로 섹션이 없습니다.");
      }

      setIsMapReady(true);
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : "알 수 없는 오류";
      console.error(`지도 초기화 실패: ${message}`);
      console.error("지도 초기화 오류 상세:", error);
      setIsMapReady(false);
      return false;
    }
  }, [initialCenter, initialZoom, sections]);

  // 지도 초기화 재시도 함수
  const retryInitialize = useCallback(
    (retryCount = 0, maxRetries = 20) => {
      if (retryCount >= maxRetries) {
        console.error(`최대 재시도 횟수(${maxRetries}회) 초과. 지도 초기화 실패.`);
        return;
      }

      console.log(`지도 초기화 시도 #${retryCount + 1}`);

      if (!initializeMap()) {
        // 실패 시 300ms 후 재시도
        setTimeout(() => retryInitialize(retryCount + 1, maxRetries), 300);
      } else {
        console.log("지도 초기화 성공!");
      }
    },
    [initializeMap]
  );

  // 컴포넌트 마운트/언마운트 및 속성 변경 시 지도 초기화
  useEffect(() => {
    console.log("지도 초기화 시작");

    // 섹션이 비어있으면 초기화 하지 않음
    if (sections.length === 0) {
      console.log("경로 섹션이 없어 지도 초기화 대기 중");
      return;
    }

    retryInitialize();

    // clean-up 함수
    return () => {
      console.log("지도 정리 중");
      if (mapInstance.current) {
        polylines.current.forEach((polyline) => polyline.setMap(null));
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
      setIsMapReady(false);
    };
  }, [retryInitialize, sections]);

  return { mapRef, isMapReady };
};

export default useNaverMap;
