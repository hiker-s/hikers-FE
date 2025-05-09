import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./RoadView.styled";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

interface RoadViewProps {
  lat: number;
  lng: number;
}

const RoadView = React.memo(({ lat, lng }: RoadViewProps) => {
  const panoramaRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_APP_NAVER_MAP_API_KEY}&submodules=panorama`;
    script.async = true;
    script.onload = () => setIsLoading(false);
    script.onerror = () => setError("api 불러오기 실패");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isLoading || error || !panoramaRef.current || !window.naver?.maps) return;

    const { LatLng, Panorama } = window.naver.maps;

    const position = new LatLng(lat, lng);

    const panorama = new Panorama(panoramaRef.current, {
      position,
      pov: { pan: 0, tilt: 0, fov: 100 },
    });

    return () => {
      panorama.destroy();
    };
  }, [isLoading, error, lat, lng]);

  return (
    <div>
      {isLoading ? (
        <div>
          <div></div>
          <p>지도 로딩 중</p>
        </div>
      ) : error ? (
        <div>
          <p>
            {error}
            <br />
            <span>api 키 확인 필요</span>
          </p>
        </div>
      ) : (
        <Styled.Wrapper ref={panoramaRef}></Styled.Wrapper>
      )}
    </div>
  );
});

export default RoadView;
