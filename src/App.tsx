import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./style/global";

function App() {
  const [mapReady, setMapReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // 네이버 지도 API 스크립트 로딩 함수
  const loadNaverMapScript = () => {
    const scriptId = "naver-map-script";

    // 중복 방지
    if (document.getElementById(scriptId)) {
      setMapReady(true); // 이미 로드되어 있다면 바로 true 처리
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_APP_NAVER_MAP_API_KEY}&submodules=panorama`;
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      console.log("네이버 지도 API 로드 완료");
      console.log("불러온 네이버 API 키:", import.meta.env.VITE_APP_NAVER_MAP_API_KEY);
      setMapReady(true);
    };

    script.onerror = () => {
      console.error("네이버 지도 API 로드 실패");
      setLoadError(true);
    };

    document.head.appendChild(script);
  };

  useEffect(() => {
    loadNaverMapScript();
  }, []);

  return (
    <>
      <GlobalStyle />
      {loadError ? (
        <p style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
          지도를 불러오지 못했습니다. 새로고침 해주세요.
        </p>
      ) : mapReady ? (
        <Outlet />
      ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>지도를 불러오는 중입니다...</p>
      )}
    </>
  );
}

export default App;
