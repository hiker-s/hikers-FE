export interface LatLng {
  lat: number;
  lng: number;
  ele?: number; // 고도 정보 (옵션)
}

export interface Section {
  path: LatLng[];
  color: string;
  start_name?: string;
  end_name?: string;
  path_id?: number;
  length_meter?: number;
  time_minute?: number;
}

// 네이버 지도 API 관련 타입 정의
export interface NaverMapOptions {
  center: NaverLatLng;
  zoom: number;
  zoomControl: boolean;
  zoomControlOptions: {
    position: number;
  };
}

export interface NaverLatLng {
  lat(): number;
  lng(): number;
  x?: number;
  y?: number;
}

export interface NaverPolylineOptions {
  map: NaverMapInstance | null;
  path: NaverLatLng[];
  strokeColor: string;
  strokeWeight: number;
  strokeOpacity?: number;
}

// 리스너 관련 타입 정의
export type NaverMapEventName = string;
export type NaverMapEventParams = Record<string, unknown>;
export type NaverMapEventListener = (event: NaverMapEventParams) => void;
export interface NaverMapListenerId {
  id: number;
  target: unknown;
}

export interface NaverMapInstance {
  destroy(): void;
  addListener(eventName: NaverMapEventName, listener: NaverMapEventListener): NaverMapListenerId;
  removeListener(listenerId: NaverMapListenerId): void;
  setCenter(latlng: NaverLatLng): void;
  setZoom(zoom: number): void;
  getCenter(): NaverLatLng;
  getZoom(): number;
}

export interface NaverPolylineInstance {
  setMap(map: NaverMapInstance | null): void;
  getPath(): NaverLatLng[];
  setPath(path: NaverLatLng[]): void;
  setOptions(options: NaverPolylineOptions): void;
}

export interface NaverMapsNamespace {
  Map: new (element: HTMLElement, options: NaverMapOptions) => NaverMapInstance;
  LatLng: new (lat: number, lng: number) => NaverLatLng;
  Polyline: new (options: NaverPolylineOptions) => NaverPolylineInstance;
  Position: {
    TOP_LEFT: number;
    TOP_CENTER: number;
    TOP_RIGHT: number;
    LEFT_TOP: number;
    LEFT_CENTER: number;
    LEFT_BOTTOM: number;
    RIGHT_TOP: number;
    RIGHT_CENTER: number;
    RIGHT_BOTTOM: number;
    BOTTOM_LEFT: number;
    BOTTOM_CENTER: number;
    BOTTOM_RIGHT: number;
  };
}

export interface NaverGlobal {
  maps: NaverMapsNamespace;
}
