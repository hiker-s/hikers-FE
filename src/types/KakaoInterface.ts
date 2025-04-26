export interface KakaoShareButton {
  title: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

export interface KakaoShareContent {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

export interface KakaoShareParams {
  objectType: string;
  content: KakaoShareContent;
  buttons: KakaoShareButton[];
}

export interface KakaoShare {
  sendDefault: (params: KakaoShareParams) => void;
}

export interface KakaoSDK {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: KakaoShare;
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}
