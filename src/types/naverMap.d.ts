export interface LatLng {
  lat: number;
  lng: number;
  x?: number;
  y?: number;
}

export interface Section {
  path: LatLng[];
  color: string;
}

export interface NaverMapInstance {
  destroy: () => void;
  getCenter: () => LatLng;
  setCenter: (latLng: LatLng) => void;
  setZoom: (zoom: number) => void;
}

export interface NaverPolylineInstance {
  setMap: (map: NaverMapInstance | null) => void;
  setOptions: (options: Partial<PolylineOptions>) => void;
}

export interface MapOptions {
  center: LatLng;
  zoom: number;
  zoomControl?: boolean;
  zoomControlOptions?: {
    position: number; // 실제로는 enum 값
  };
}

export interface PolylineOptions {
  map: NaverMapInstance | null;
  path: LatLng[];
  strokeColor: string;
  strokeWeight: number;
  strokeOpacity?: number;
  strokeStyle?: string;
}

export interface NaverMap {
  Map: new (element: HTMLElement, options: MapOptions) => NaverMapInstance;
  LatLng: new (lat: number, lng: number) => LatLng;
  Polyline: new (options: PolylineOptions) => NaverPolylineInstance;
  Position: {
    TOP_RIGHT: number;
    TOP_LEFT: number;
    BOTTOM_RIGHT: number;
    BOTTOM_LEFT: number;
  };
}

export interface NaverGlobal {
  maps: NaverMap;
}

declare global {
  interface Window {
    naver?: NaverGlobal;
  }
}
