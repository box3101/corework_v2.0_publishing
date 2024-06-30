// ./src/routes/index.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';


//Button 컴포넌트르 import
// import Button from 'pages/antDesign/Button';
// import Modal from 'pages/antDesign/Modal';
import Ant01 from 'pages/antDesign/pages/Ant01';

const RootRoutes = () => {
  return(
      <>
        <Routes>
          {/* 버튼 컴포넌트 */}
          {/* <Route path='/antDesign/Button' element={<Button />} />
          <Route path='/antDesign/Modal' element={<Modal />} /> */}
          <Route path='/antDesign/pages/Ant01' element={<Ant01 />} />
        </Routes>
      </>
  );
};

export default RootRoutes;
