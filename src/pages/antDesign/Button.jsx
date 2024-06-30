// import React, { useState } from 'react';
// import { Button, Input, InputNumber, Form } from 'antd';
// import { DownloadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { Modal } from 'antd';

// const { Search, TextArea } = Input;

// const AntDesign = () => {
//   const [value, setValue] = useState('');
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [disabled, setDisabled] = useState(true);
//   const [modalStyle, setModalStyle] = useState({ top: 20 }); // 모달의 위치 조정을 위한 상태
//   const [loading, setLoading] = useState(false); // 로딩 상태 관리

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setLoading(true);
//     // 데이터 처리 로직 후
//     setTimeout(() => {
//       setIsModalVisible(false);
//       setLoading(false);
//     }, 2000); // 2초 후 모달 닫기
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const onStart = (event, uiData) => {
//     const { clientWidth, clientHeight } = window.document.documentElement;
//     const targetRect = uiData.node.getBoundingClientRect();
//     if (
//       targetRect.top < 0 ||
//       targetRect.left < 0 ||
//       targetRect.right > clientWidth ||
//       targetRect.bottom > clientHeight
//     ) {
//       return false; // 드래그가 화면 밖으로 나가지 않도록 제한
//     }
//   };

//   return (
//     <div>
//       <div className='antd inner'>
//         <div className='rows'>
//           <h2>Button</h2>
//           <div className='row'>
//             <h3>Types and States</h3>
//             <ul className='info'>
//               {/* 기존 버튼 타입들 */}
//               <li>
//                 <p className='title'>Primary</p>
//                 <Button type='primary' className='custom-btn'>
//                   <DownloadOutlined /> 클릭하세요
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Default</p>
//                 <Button type='default'>
//                   클릭하세요 <EditOutlined />
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Dashed</p>
//                 <Button type='dashed'>
//                   클릭하세요 <DeleteOutlined />
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Text</p>
//                 <Button type='text'>클릭하세요</Button>
//               </li>
//               <li>
//                 <p className='title'>Link</p>
//                 <Button type='link'>클릭하세요</Button>
//               </li>
//               <li>
//                 <p className='title'>Ghost</p>
//                 <Button type='ghost'>클릭하세요</Button>
//               </li>
//               {/* 추가된 버튼 속성들 */}
//               <li>
//                 <p className='title'>Danger</p>
//                 <Button type='primary' danger>
//                   삭제 <DeleteOutlined />
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Disabled</p>
//                 <Button disabled>
//                   비활성화 <DeleteOutlined />
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Loading</p>
//                 <Button loading type='primary'>
//                   로딩 중 <DownloadOutlined />
//                 </Button>
//               </li>
//             </ul>
//           </div>
//           <div className='row'>
//             <h3>Size</h3>
//             <ul className='info'>
//               <li>
//                 <p className='title'>Primary</p>
//                 <Button type='primary' size='large'>
//                   <DownloadOutlined /> Large
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Default</p>
//                 <Button type='default'>
//                   Default Size <EditOutlined />
//                 </Button>
//               </li>
//               <li>
//                 <p className='title'>Dashed Small</p>
//                 <Button type='dashed' size='small'>
//                   Small <DeleteOutlined />
//                 </Button>
//               </li>
//             </ul>
//           </div>
//           <div className='row'>
//             <h2>Input</h2>
//             <h3>Basic usage</h3>
//             <Input placeholder='Basic usage' />
//             <h3>Search</h3>
//             <Search
//               placeholder='input search text'
//               enterButton='Search'
//               size='large'
//               onSearch={(value) => console.log(value)}
//             />
//             <h3>Text Area</h3>
//             <TextArea rows={4} placeholder='Enter your text here' />
//             <h3>Password</h3>
//             <Input.Password placeholder='input password' />
//             <h3>Disabled</h3>
//             <Input placeholder='Disabled input' disabled />
//             <h3>With Prefix and Suffix</h3>
//             <Input placeholder='Enter your text here' prefix={<DownloadOutlined />} suffix={<EditOutlined />} />
//             <h3>Additional Examples</h3>
//             <h3>Input Sizes</h3>
//             <Input size='large' placeholder='Large size' />
//             <Input placeholder='Default size' />
//             <Input size='small' placeholder='Small size' />
//             <h3>Input Status</h3>
//             <Input placeholder='Error status' status='error' />
//             <Input placeholder='Warning status' status='warning' />
//             <h3>Clearable Input</h3>
//             <Input placeholder='Clearable input' allowClear />
//             <h3>InputNumber</h3>
//             <InputNumber min={1} max={10} defaultValue={3} />
//             <h3>Controlled Input</h3>
//             <Input placeholder='Controlled input' value={value} onChange={onChange} />
//             <h3>Form Usage</h3>
//             <Form form={form} layout='vertical'>
//               <Form.Item
//                 label='Form Input'
//                 name='formInput'
//                 rules={[{ required: true, message: 'Please input your text!' }]}
//               >
//                 <Input placeholder='Form input' />
//               </Form.Item>
//               <Form.Item>
//                 <Button type='primary' htmlType='submit'>
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//           <div className='row'>
//             <h2>Modal</h2>
//             <ul className='info'>
//               {/* 기존 버튼 타입들 */}
//               <li>
//                 <Button type='primary' onClick={showModal}>
//                   모달 열기
//                 </Button>
//                 <Modal
//                   title='기본 모달'
//                   visible={isModalVisible}
//                   onOk={handleOk}
//                   onCancel={handleCancel}
//                   okText='확인1' // 확인 버튼 텍스트
//                   cancelText='취소2' // 취소 버튼 텍스트
//                   okButtonProps={{ disabled: loading }} // 확인 버튼 속성
//                   cancelButtonProps={{ disabled: loading }} // 취소 버튼 속성
//                   // footer={null} // 기본 푸터 제거
//                   centered // 모달을 화면 중앙에 위치
//                   style={modalStyle} // 직접 지정한 모달 스타일
//                 >
//                   {loading ? <p>로딩 중...</p> : <p>lorem1000</p>}
//                 </Modal>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AntDesign;
