import { useEffect, useRef } from "react";
import * as Styled from "./SketchMap.styled";

export interface LatLng {
  lat: number;
  lng: number;
}

interface Section {
  path: LatLng[];
  color: string;
}

interface Props {
  sections: Section[];
}

// 네이버 지도 타입 정의
interface NaverMap {
  Map: new (
    element: HTMLElement,
    options: MapOptions
  ) => {
    destroy: () => void;
  };
  LatLng: new (lat: number, lng: number) => unknown;
  Polyline: new (options: PolylineOptions) => unknown;
  Position: {
    TOP_RIGHT: unknown;
  };
}

interface MapOptions {
  center: unknown;
  zoom: number;
  zoomControl?: boolean;
  zoomControlOptions?: {
    position: unknown;
  };
}

interface PolylineOptions {
  map: unknown;
  path: unknown[];
  strokeColor: string;
  strokeWeight: number;
}

interface NaverGlobal {
  maps: NaverMap;
}

const SketchMap = ({ sections }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mapInstance: { destroy: () => void } | null = null;
    let retryCount = 0;
    const MAX_RETRIES = 20;

    const initializeMap = () => {
      if (!mapRef.current) return;

      const naverGlobal = (window as Window & { naver?: NaverGlobal }).naver;

      if (!naverGlobal?.maps) {
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          setTimeout(initializeMap, 300);
        }
        return;
      }

      try {
        const { maps } = naverGlobal;

        // 첫 번째 섹션의 시작점을 중심으로 설정
        const firstPoint = sections[0]?.path[0] || { lat: 37.5821, lng: 126.9851 };

        // 지도 생성
        mapInstance = new maps.Map(mapRef.current, {
          center: new maps.LatLng(firstPoint.lat, firstPoint.lng),
          zoom: 14,
          zoomControl: true,
          zoomControlOptions: {
            position: maps.Position.TOP_RIGHT,
          },
        });

        // 경로 그리기
        sections.forEach((section) => {
          const path = section.path.map((coord) => new maps.LatLng(coord.lat, coord.lng));

          new maps.Polyline({
            map: mapInstance,
            path,
            strokeColor: section.color,
            strokeWeight: 5,
          });
        });
      } catch (error) {
        console.error("Map initialization error:", error);
      }
    };

    initializeMap();

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
    };
  }, [sections]);

  return (
    <Styled.SketchMapWrapper>
      <Styled.CourseInfoTitle>약도</Styled.CourseInfoTitle>
      <Styled.MapContainer>
        <div ref={mapRef} className="map-inner" />
      </Styled.MapContainer>
    </Styled.SketchMapWrapper>
  );
};

export default SketchMap;
