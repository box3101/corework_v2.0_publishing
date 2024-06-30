// CustomDrawer.js
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const CustomDrawer = ({ isVisible, onClose }) => {
  const [drawerWidth, setDrawerWidth] = useState(300); // 초기 Drawer 넓이 설정

  const expandDrawer = () => {
    setDrawerWidth(600); // Drawer 넓이 확장
  };

  return (
    <Drawer title='사이드 Drawer' placement='right' onClose={onClose} visible={isVisible} width={drawerWidth}>
      <p>여기는 사이드 Drawer입니다.</p>
      <Button type='primary' onClick={expandDrawer}>
        넓이 확장
      </Button>
    </Drawer>
  );
};

export default CustomDrawer;
