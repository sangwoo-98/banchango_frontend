import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const UseGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-187568714-1');
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);
  }, [location]);
};
export const searchWarehouseEvent = () => {
  ReactGA.event({
    category: '창고 검색',
    action: '창고 검색 버튼 클릭',
    label: '창고 검색',
    value: 1,
  });
};
export const howToUseClickedEvent = () => {
  ReactGA.event({
    category: '메인페이지',
    action: '이용방법 버튼 클릭',
    label: '이용방법',
    value: 1,
  });
};
export const getProductHistoryClickedEvent = () => {
  ReactGA.event({
    category: '견적 문의',
    action: '불러오기 버튼 클릭',
    label: '불러오기',
    value: 1,
  });
};
export const quoteDoneEvent = () => {
  ReactGA.event({
    category: '견적 문의',
    action: '견적 문의하기 버튼 클릭',
    label: '견적 문의',
    value: 1,
  });
};
export const registerEvent = {
  success: () => {
    ReactGA.event({
      category: '창고 등록',
      action: '창고 등록 요청 완료',
      label: '창고 등록',
      value: 1,
    });
  },
  failed: () => {
    ReactGA.event({
      category: '창고 등록',
      action: '창고 등록 요청 미스',
      label: '창고 등록',
      value: 1,
    });
  },
};

export const signUpEvent = {
  success: () => {
    ReactGA.event({
      category: '회원가입',
      action: '회원가입 버튼 클릭',
      label: '회원가입 완료',
      value: 1,
    });
  },
  failed: () => {
    ReactGA.event({
      category: '회원가입',
      action: '회원가입 버튼 클릭',
      label: '회원가입 정보 누락',
      value: 1,
    });
  },
};

export default UseGoogleAnalytics;
