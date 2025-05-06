import styled from "styled-components";
import { useEffect, useState } from "react";

interface WeatherData {
  TEMP: string; // 기온
  SENSIBLE_TEMP: string; // 체감온도
  MAX_TEMP: string; // 최고온도
  MIN_TEMP: string; // 최저온도
  PM10_INDEX: string; // 미세먼지지표
  PM10: string; // 미세먼지농도
  PM25_INDEX: string; // 초미세먼지지표
  PM25: string; // 초미세먼지농도
  UV_INDEX: string; // 자외선지수
  RAIN_CHANCE: string; // 강수확률
}

interface WeatherItem {
  label: string;
  getValue: (data: WeatherData) => string;
}

export const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const weatherItems: WeatherItem[] = [
    { label: "현재 온도", getValue: (d) => `${d.TEMP} °C` },
    { label: "체감 온도", getValue: (d) => `${d.SENSIBLE_TEMP} °C` },
    { label: "최고 온도", getValue: (d) => `${d.MAX_TEMP} °C` },
    { label: "최저 온도", getValue: (d) => `${d.MIN_TEMP} °C` },
    { label: "미세먼지", getValue: (d) => `${d.PM10_INDEX}(${d.PM10})` },
    { label: "초미세먼지", getValue: (d) => `${d.PM25_INDEX}(${d.PM25})` },
    { label: "자외선", getValue: (d) => `${d.UV_INDEX}` },
    { label: "강수확률", getValue: (d) => `${d.RAIN_CHANCE} %` },
  ];

  useEffect(() => {
    //서울시 API에서 날씨 데이터 가져오기
    const API_KEY = import.meta.env.VITE_APP_SEOUL_API_KEY;

    const getWeather = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://openapi.seoul.go.kr:8088/${API_KEY}/xml/citydata/1/5/서울역`);
        if (!res.ok) throw new Error("API 요청 실패");

        const data = await parseXmlResponse(res);
        setWeatherData(data);
        setError(null);
      } catch (e) {
        console.error("날씨 정보 오류:", e);
        setError("날씨 정보를 불러오는데 실패했습니다");
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  useEffect(() => {
    //3초마다 표시할 날씨 정보 변경
    if (!weatherData) return;

    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % weatherItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [weatherData]);

  // XML 응답 파싱 함수
  const parseXmlResponse = async (res: Response): Promise<WeatherData> => {
    const xmlText = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlText, "text/xml");
    const weatherStts = doc.querySelector("WEATHER_STTS");

    if (!weatherStts) throw new Error("날씨 정보 태그 누락");

    const getValue = (tag: string): string => {
      const el = weatherStts.querySelector(tag);
      return el?.textContent || "정보 없음";
    };

    return {
      TEMP: getValue("TEMP"),
      SENSIBLE_TEMP: getValue("SENSIBLE_TEMP"),
      MAX_TEMP: getValue("MAX_TEMP"),
      MIN_TEMP: getValue("MIN_TEMP"),
      PM10_INDEX: getValue("PM10_INDEX"),
      PM10: getValue("PM10"),
      PM25_INDEX: getValue("PM25_INDEX"),
      PM25: getValue("PM25"),
      UV_INDEX: getValue("UV_INDEX"),
      RAIN_CHANCE: getValue("RAIN_CHANCE"),
    };
  };

  const item = weatherItems[currentIndex];

  return (
    <WeatherContainer>
      {loading ? (
        <>
          <Label>오늘의</Label>
          <Value>날씨는?</Value>
        </>
      ) : error ? (
        <Value>{error}</Value>
      ) : weatherData ? (
        <>
          <Label>{item.label}</Label>
          <Value>{item.getValue(weatherData)}</Value>
        </>
      ) : null}
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  display: flex;
  width: 10.4375rem;
  height: 2.125rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.31rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #eee;
  user-select: none;
`;

const Label = styled.div`
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.02625rem;
`;

const Value = styled.span`
  color: #349989;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.02625rem;
`;
