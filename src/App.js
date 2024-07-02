import React from 'react';
import { ConfigProvider } from 'antd';
import './scss/ui.scss';
import RootRoutes from './routes';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0388A6',
          colorLink: 'blue',
          colorSuccess: 'skyblue',
          colorWarning: 'darkred',
          colorError: '#FF4D4F',
          colorBgLayout: '#EBF9FF',
        },
      }}
    >
      <div className='wrap'>
          <RootRoutes />
      </div>
    </ConfigProvider>
  );
}

export default App;
