import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './scss/ui.scss';
import RootRoutes from './routes';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      once: false, // 스크롤 할 때마다 애니메이션 반복
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0388A6',
          colorLink: 'blue',
          colorSuccess: 'skyblue',
          colorWarning: 'darkred',
          colorWarningBg: '#FFF2F0',
          colorError: '#FF4D4F',
          colorBgLayout: '#EBF9FF',
          // 툴팁 화살표 배경색 추가
          tooltipArrowBg: '#0388A6', // 여기서 원하는 색상으로 변경
        },
      }}
    >
      <div className="wrap">
        <RootRoutes />
      </div>
    </ConfigProvider>
  );
}

export default App;
