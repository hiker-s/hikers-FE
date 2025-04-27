import { useEffect, useRef, useCallback } from "react";
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

  const initializeMap = useCallback(() => {
    if (!mapRef.current) {
      console.error("지도 컨테이너를 찾을 수 없습니다.");
      return false;
    }

    const naver = (window as unknown as { naver?: NaverGlobal }).naver;
    if (!naver?.maps) {
      console.error("네이버 지도 SDK가 로드되지 않았습니다.");
      return false;
    }

    try {
      const { maps } = naver;
      const center = initialCenter || sections[0]?.path[0] || { lat: 37.5665, lng: 126.978 };

      mapInstance.current = new maps.Map(mapRef.current, {
        center: new maps.LatLng(center.lat, center.lng),
        zoom: initialZoom,
        zoomControl: true,
        zoomControlOptions: {
          position: maps.Position.TOP_RIGHT,
        },
      });

      polylines.current.forEach((polyline) => polyline.setMap(null));
      polylines.current = [];

      sections.forEach((section) => {
        const path = section.path.map((coord) => new maps.LatLng(coord.lat, coord.lng));
        const polyline = new maps.Polyline({
          map: mapInstance.current,
          path,
          strokeColor: section.color,
          strokeWeight: 5,
        });
        polylines.current.push(polyline);
      });

      console.error(null);
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : "알 수 없는 오류";
      console.error(`지도 초기화 실패: ${message}`);
      console.error("Map initialization error:", error);
      return false;
    }
  }, [initialCenter, initialZoom, sections]);

  const retryInitialize = useCallback(
    (retryCount = 0, maxRetries = 20) => {
      if (retryCount >= maxRetries) return;

      if (!initializeMap()) {
        setTimeout(() => retryInitialize(retryCount + 1, maxRetries), 300);
      }
    },
    [initializeMap]
  );

  useEffect(() => {
    retryInitialize();

    return () => {
      if (mapInstance.current) {
        polylines.current.forEach((polyline) => polyline.setMap(null));
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, [retryInitialize]);

  return { mapRef };
};

export default useNaverMap;
