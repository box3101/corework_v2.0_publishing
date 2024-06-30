// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import CustomDrawer from './CustomDrawer';

// const NestedModals = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isAlertVisible, setIsAlertVisible] = useState(false); // Alert 모달 상태 추가
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false); // Drawer 상태 추가
//   const [modalStyle, setModalStyle] = useState({ top: 20 }); // 모달의 위치 조정을 위한 상태
//   const [loading, setLoading] = useState(false); // 로딩 상태 관리

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const showSecondModal = () => {
//     setIsSecondModalOpen(true);
//   };

//   const handleSecondModalOk = () => {
//     setIsSecondModalOpen(false);
//     alert('경고: 두 번째 모달이 닫혔습니다!');
//   };

//   const handleSecondModalCancel = () => {
//     setIsSecondModalOpen(false);
//   };

//   const showThirdModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleThirdModalOk = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setIsModalVisible(false);
//       setLoading(false);
//     }, 2000);
//   };

//   const handleThirdModalCancel = () => {
//     setIsModalVisible(false);
//   };

//   // Alert 모달 관련 함수
//   const showAlert = () => {
//     setIsAlertVisible(true);
//   };

//   const handleAlertOk = () => {
//     setIsAlertVisible(false);
//   };

//   // Drawer 관련 함수
//   const showDrawer = () => {
//     setIsDrawerVisible(true);
//   };

//   const closeDrawer = () => {
//     setIsDrawerVisible(false);
//   };

//   return (
//     <div className='antd inner'>
//       <div className='row'>
//         <div className='info'>
//           <li>
//             <Button type='primary' onClick={showModal}>
//               첫 번째 모달 열기
//             </Button>
//             <Modal title='첫 번째 모달' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//               <p>여기는 첫 번째 모달입니다. 두 번째 모달을 열려면 아래 버튼을 클릭하세요.</p>
//               <Button type='primary' onClick={showSecondModal}>
//                 두 번째 모달 열기
//               </Button>
//             </Modal>
//             <Modal
//               title='두 번째 모달'
//               open={isSecondModalOpen}
//               onOk={handleSecondModalOk}
//               onCancel={handleSecondModalCancel}
//             >
//               <p>여기는 두 번째 모달입니다.</p>
//             </Modal>
//           </li>
//           <li>
//             <Button type='primary' onClick={showThirdModal}>
//               세 번째 모달 열기
//             </Button>
//             <Modal
//               title='기본 모달'
//               visible={isModalVisible}
//               onOk={handleThirdModalOk}
//               onCancel={handleThirdModalCancel}
//               okText='확인1' // 확인 버튼 텍스트
//               cancelText='취소2' // 취소 버튼 텍스트
//               okButtonProps={{ disabled: loading }} // 확인 버튼 속성
//               cancelButtonProps={{ disabled: loading }} // 취소 버튼 속성
//               centered // 모달을 화면 중앙에 위치
//               style={modalStyle} // 직접 지정한 모달 스타일
//             >
//               {loading ? <p>로딩 중...</p> : <p>lorem1000</p>}
//             </Modal>
//           </li>
//           <li>
//             <Button type='primary' onClick={showAlert}>
//               Alert 모달 열기
//             </Button>
//             <Modal
//               title='Alert'
//               visible={isAlertVisible}
//               onOk={handleAlertOk}
//               onCancel={handleAlertOk}
//               footer={[
//                 <Button key='ok' type='primary' onClick={handleAlertOk}>
//                   확인
//                 </Button>,
//               ]}
//             >
//               <p>이것은 Alert 메시지입니다.</p>
//             </Modal>
//           </li>
//           <li>
//             <Button type='primary' onClick={showDrawer}>
//               사이드 Drawer 열기
//             </Button>
//             <CustomDrawer isVisible={isDrawerVisible} onClose={closeDrawer} />
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NestedModals;
