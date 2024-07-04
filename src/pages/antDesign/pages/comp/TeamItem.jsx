import React, { useState } from 'react';
import { Button, Select, Dropdown, Menu, Input } from 'antd';

const { Option } = Select;

const TeamItem = ({ teamName, index, isEditMode }) => {
  // showLeaderSelect 상태와 상태 업데이트 함수를 정의
  // 초기 값은 false로 설정되어 있으며, 이는 리더 선택 모드가 비활성화된 상태를 의미
  const [showLeaderSelect, setShowLeaderSelect] = useState(false);

  // selectedLeader 상태와 상태 업데이트 함수를 정의
  // 초기 값은 null로 설정되어 있으며, 이는 아직 선택된 리더가 없음을 의미
  const [selectedLeader, setSelectedLeader] = useState(null);

  // 팀 이름 편집 모드 상태 정의
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedTeamName, setEditedTeamName] = useState(teamName);
  const [tempTeamName, setTempTeamName] = useState(teamName);

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

  const [searchValue, setSearchValue] = useState('');

  const filteredOptions = leaderOptions.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

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
    const leader = leaderOptions.find((leader) => leader.value === value);
    // 선택된 리더의 value를 selectedLeader 상태로 설정
    setSelectedLeader(leader);
    // 리더 선택 후 선택 모드를 종료하기 위해 showLeaderSelect를 false로 설정
    setShowLeaderSelect(false);
  };

  // 팀 이름 클릭 핸들러 함수
  const handleNameClick = () => {
    setIsEditingName(true);
  };

  // 팀 이름 변경 핸들러 함수
  const handleTempNameChange = (e) => {
    setTempTeamName(e.target.value);
  };

  // 팀 이름 저장 핸들러 함수
  const handleNameSave = () => {
    setEditedTeamName(tempTeamName);
    setIsEditingName(false);
  };

  // 팀 이름 취소 핸들러 함수
  const handleNameCancel = () => {
    setIsEditingName(false);
  };

  const renderOption = (leader) => (
    <div className="profile-wrap">
      <div className="left">
        <span className="profile-image"></span>
        <span>{leader.label}</span>
      </div>
      <span className="department">{leader.department}</span>
    </div>
  );

  return (
    <div className="team-item flex aic gap32">
      <div className="team-info flex aic gap32">
        {!isEditingName ? (
          <h3 className="team-name" onClick={handleNameClick}>
            {editedTeamName}
          </h3>
        ) : (
          <div className="flex aic gap8 w-full">
            <Input
              type="text"
              maxLength={50}
              value={tempTeamName}
              onChange={handleTempNameChange}
              onPressEnter={handleNameSave}
            />
            <Button type="primary" size="large" onClick={handleNameSave}>
              저장
            </Button>
            <Button type="default" size="large" onClick={handleNameCancel}>
              취소
            </Button>
          </div>
        )}

        {!showLeaderSelect ? (
          <div className="team-leader">
            <p onClick={handleLeaderClick}>
              {selectedLeader ? (
                <div className="profile-wrap">
                  <div className="left">
                    <span className="profile-image"></span>
                    <span className="profile-name">{selectedLeader.label}</span>
                  </div>
                  <span className="department">{selectedLeader.department}</span>
                </div>
              ) : (
                <>
                  <span className="icon">
                    <i className="icon-user"></i>
                  </span>
                  팀 리더 지정
                </>
              )}
            </p>
          </div>
        ) : (
          <div className="leader-select-container" style={{ position: 'relative' }}>
            <Select
              className="custom-select"
              placeholder={selectedLeader ? selectedLeader.label : '리더 선택'}
              onChange={handleLeaderSelect}
              value={selectedLeader?.value}
              dropdownStyle={{ minWidth: '200px', maxHeight: '300px' }}
              dropdownRender={(menu) => (
                <div>
                  <Input
                    placeholder="리더 검색"
                    style={{ marginBottom: '5px' }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {menu}
                </div>
              )}
              notFoundContent={
                leaderOptions.length === 0 ? '구성원이 없습니다. 구성원을 추가해주세요.' : '검색 결과가 없습니다.'
              }
              filterOption={false}
              getPopupContainer={(trigger) => trigger.parentNode}
            >
              {filteredOptions.map((leader) => (
                <Option key={leader.value} value={leader.value} label={leader.label}>
                  {renderOption(leader)}
                </Option>
              ))}
            </Select>
          </div>
        )}
        <p className="team-members">
          멤버 <span>0명</span>
        </p>
      </div>
      <div className="team-actions">
        <Dropdown overlay={teamMenu} trigger={['click']} placement="bottomRight">
          <Button type="default" size="large" ghost>
            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/DotsThreeVertical.svg`} alt="Dots Icon" />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default TeamItem;
