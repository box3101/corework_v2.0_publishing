import React, { useState } from 'react';
import { Button, Select, Dropdown, Menu } from 'antd';

const { Option } = Select;

const TeamItem = ({ teamName, index, isEditMode }) => {
  // showLeaderSelect 상태와 상태 업데이트 함수를 정의
  // 초기 값은 false로 설정되어 있으며, 이는 리더 선택 모드가 비활성화된 상태를 의미
  const [showLeaderSelect, setShowLeaderSelect] = useState(false);

  // selectedLeader 상태와 상태 업데이트 함수를 정의
  // 초기 값은 null로 설정되어 있으며, 이는 아직 선택된 리더가 없음을 의미
  const [selectedLeader, setSelectedLeader] = useState(null);

  // 예시 리더 목록
  // 각 리더의 정보를 객체로 담고 있는 배열
  // value: 고유 식별자, label: 이름, department: 소속 부서 및 직책
  const leaderOptions = [
    { value: 'kang', label: '강민식', department: '전략기획팀 / DX리드' },
    { value: 'go', label: '고나경', department: '디자이너팀 / 팀원' },
    { value: 'kim', label: '김용현', department: '개발팀 / 리드' },
    { value: 'park', label: '박진옥', department: '개발팀 / 팀원' },
    { value: 'lee', label: '이길상', department: '경영지원&Mgmt / CEO' },
    { value: 'lee2', label: '이석우', department: '영업/마케팅 / CGO' },
    { value: 'choi', label: '최지훈', department: '디자인팀 / 리드' },
    { value: 'jung', label: '정수민', department: '마케팅팀 / 팀원' },
    { value: 'yoo', label: '유재석', department: '인사팀 / 리드' },
    { value: 'han', label: '한소희', department: '고객지원팀 / 팀원' },
    { value: 'lim', label: '임창정', department: '재무팀 / 리드' },
    { value: 'song', label: '송혜교', department: 'PR팀 / 팀원' },
    { value: 'kwon', label: '권상우', department: '법무팀 / 리드' },
    { value: 'bae', label: '배수지', department: '상품개발팀 / 팀원' },
    { value: 'oh', label: '오연서', department: '해외사업팀 / 리드' },
  ];

  // 클릭 이벤트 핸들러를 포함한 팀 작업 메뉴 설정입니다.
  const teamMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => console.log('1')}>
        팀 정보 설정
      </Menu.Item>
      <Menu.Item key="2" onClick={() => console.log('2')}>
        팀 종료 전환
      </Menu.Item>
    </Menu>
  );

  // 리더 클릭 핸들러 함수
  const handleLeaderClick = () => {
    // showLeaderSelect 상태를 토글(반전)하는 함수
    // 이전 상태의 반대 값으로 설정하여 리더 선택 모드를 켜거나 끔
    setShowLeaderSelect((prev) => !prev);
  };

  // 리더 선택 핸들러 함수
  const handleLeaderSelect = (value) => {
    // 선택된 리더의 value를 selectedLeader 상태로 설정
    setSelectedLeader(value);
    // 리더 선택 후 선택 모드를 종료하기 위해 showLeaderSelect를 false로 설정
    setShowLeaderSelect(false);
  };

  return (
    <div className="team-item flex aic gap32">
      <div className="team-info flex aic gap32">
        <h3 className="team-name">{teamName}</h3>

        {!showLeaderSelect ? (
          // showLeaderSelect가 false일 때 실행되는 블록
          <div className="team-leader">
            {/* 클릭 가능한 단락으로 리더 선택 모드로 전환 */}
            <p onClick={handleLeaderClick}>
              <span>
                <i className="icon-user"></i>
              </span>
              {/* 선택된 리더의 이름을 표시하거나 기본 텍스트 '팀 리더'를 표시 */}
              {selectedLeader ? leaderOptions.find((leader) => leader.value === selectedLeader)?.label : '팀 리더'}
            </p>
          </div>
        ) : (
          // showLeaderSelect가 true일 때 실행되는 블록
          <div className="leader-select-container">
            {/* Ant Design의 Select 컴포넌트를 사용하여 리더 선택 드롭다운 표시 */}
            <Select
              showSearch // 검색 기능 활성화
              placeholder="리더 선택" // 드롭다운의 기본 텍스트 설정
              optionFilterProp="children" // 필터링할 옵션의 속성 설정
              onChange={handleLeaderSelect} // 선택 변경 시 호출되는 함수
              notFoundContent={
                // 검색 결과가 없을 때 표시할 내용
                leaderOptions.length === 0
                  ? '구성원이 없습니다. 구성원을 추가해주세요.' // Content to display when there are no members
                  : '검색 결과가 없습니다.' // Default no search results message
              }
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())} // 옵션 필터링 로직
            >
              {/* leaderOptions 배열을 순회하여 Option 컴포넌트 생성 */}
              {leaderOptions.map((leader) => (
                <Option key={leader.value} value={leader.value} label={leader.label}>
                  <div className="profile-wrap">
                    <div className="left">
                      {/* 리더의 이름 왼쪽에 프로필 이미지 추가 */}
                      <span
                        className="profile-image"
                        // style={{ backgroundImage: `url(images/profiles/${leader.value}.jpg)` }} // 각 리더의 이미지 경로
                      ></span>
                      {/* 리더의 이름 표시 */}
                      <span>{leader.label}</span>
                      {/* 리더의 부서를 오른쪽에 표시 */}
                    </div>
                    <span className="department">{leader.department}</span>
                  </div>
                </Option>
              ))}
            </Select>
          </div>
        )}
        <p className="team-members">
          멤버 <span>0명</span>
        </p>
      </div>
      {/* // 드롭다운 메뉴를 포함한 팀 액션 구성 요소입니다. */}
      <div className="team-actions">
        <Dropdown overlay={teamMenu} trigger={['click']} placement="bottomRight">
          <Button type="default" size="large" ghost>
            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/DotsThreeVertical.svg`} alt="Dots Icon" />
          </Button>
        </Dropdown>{' '}
      </div>
    </div>
  );
};

export default TeamItem;
