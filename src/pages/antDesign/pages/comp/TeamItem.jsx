import React, { useState } from 'react';
import { Button, Select } from 'antd';

const { Option } = Select;

const TeamItem = ({ teamName, index, isEditMode }) => {
  const [showLeaderSelect, setShowLeaderSelect] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);

  // 예시 리더 목록
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

  const handleLeaderClick = () => {
    setShowLeaderSelect((prev) => !prev);
  };

  const handleLeaderSelect = (value) => {
    setSelectedLeader(value);
    setShowLeaderSelect(false);
  };

  return (
    <div className="team-item flex aic gap32">
      <div className="team-info flex aic gap32">
        <h3 className="team-name">{teamName}</h3>

        {!showLeaderSelect ? (
          <div className="team-leader">
            <p onClick={handleLeaderClick}>
              <span>
                <i className="icon-user"></i>
              </span>
              {selectedLeader ? leaderOptions.find((leader) => leader.value === selectedLeader)?.label : '팀 리더'}
            </p>
          </div>
        ) : (
          <div className="leader-select-container" style={{ width: '300px' }}>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="리더 선택"
              optionFilterProp="children"
              onChange={handleLeaderSelect}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            >
              {leaderOptions.map((leader) => (
                <Option key={leader.value} value={leader.value} label={leader.label}>
                  <div>
                    <span>{leader.label}</span>
                    <span style={{ float: 'right', color: '#8c8c8c' }}>{leader.department}</span>
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

      <div className="team-actions">
        <Button type="default" size="large" ghost>
          <img src={`${process.env.PUBLIC_URL}/assets/images/icon/DotsThreeVertical.svg`} alt="Dots Icon" />
        </Button>
      </div>
    </div>
  );
};

export default TeamItem;
