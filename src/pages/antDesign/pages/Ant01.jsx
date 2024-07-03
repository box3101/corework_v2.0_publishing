import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AdminLayout from '@layout/Layout';
import { Tabs, Button, Input, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import TeamItem from './comp/TeamItem';

const { Search } = Input;

const Ant01 = () => {
  // 페이지 정보 설정
  const breadcrumbItems = {
    mainTitle: '조직도 관리',
    describeTitle: '팀을 일괄 또는 개별로 추가한 후 순서를 편집하여 조직도를 구성하세요.',
  };
  const pageName = 'organ-page';

  // 상태 관리
  const [teamInputs, setTeamInputs] = useState([]); // 팀 입력 필드 상태
  const [teamNames, setTeamNames] = useState([]); // 추가된 팀 이름 목록
  const [inputErrors, setInputErrors] = useState([]); // 입력 오류 메시지
  const [isEditMode, setIsEditMode] = useState(false); // 순서 편집 모드 상태

  // 팀 이름 유효성 검사 함수
  const isValidTeamName = (name) => {
    const regex = /^[가-힣a-zA-Z0-9\s._-]{1,50}$/;
    return regex.test(name);
  };

  // 팀 추가 함수
  const addTeam = (index) => {
    const teamName = teamInputs[index].trim();

    // 유효성 검사
    if (!isValidTeamName(teamName)) {
      setInputErrors((prev) => {
        const newErrors = [...prev];
        newErrors[index] = '팀명은 문자/숫자/여백/특수문자(. - _)만 사용 가능하며, 50자 이내여야 합니다.';
        return newErrors;
      });
      return;
    }

    // 중복 검사
    if (teamNames.includes(teamName)) {
      setInputErrors((prev) => {
        const newErrors = [...prev];
        newErrors[index] = '이미 같은 팀명이 있습니다. 확인 후 다시 입력해 주세요.';
        return newErrors;
      });
      return;
    }

    // 팀 추가 및 상태 업데이트
    setTeamNames((prev) => [teamName, ...prev]);
    setTeamInputs((prev) => prev.filter((_, i) => i !== index));
    setInputErrors((prev) => prev.filter((_, i) => i !== index));
    message.success(`'${teamName}' 팀이 추가되었습니다.`);
  };

  // 팀 입력 필드 추가 함수
  const addTeamInput = () => {
    setTeamInputs([...teamInputs, '']);
    setInputErrors([...inputErrors, '']);
  };

  // 입력 변경 핸들러
  const handleInputChange = (index, event) => {
    const newTeamInputs = [...teamInputs];
    newTeamInputs[index] = event.target.value;
    setTeamInputs(newTeamInputs);

    // 오류 메시지 초기화
    setInputErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = '';
      return newErrors;
    });
  };

  // 팀 입력 필드 제거 함수
  const removeTeamInput = (idx) => {
    const newTeamInputs = [...teamInputs];
    newTeamInputs.splice(idx, 1);
    setTeamInputs(newTeamInputs);

    setInputErrors((prev) => {
      const newErrors = [...prev];
      newErrors.splice(idx, 1);
      return newErrors;
    });
  };

  // 드래그 앤 드롭 종료 핸들러
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(teamNames);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTeamNames(items);
  };

  return (
    <AdminLayout breadcrumbItems={breadcrumbItems} pageClass={pageName}>
      <div className="tab-panel">
        <Tabs defaultActiveKey="1" onChange={() => {}} size="default" tabPosition="top" type="line">
          <Tabs.TabPane
            tab={
              <>
                운영 중인 팀 <span className="team-count">{teamNames.length}</span>
              </>
            }
            key="1"
          >
            <div className="task-manager">
              {/* 헤더 섹션 */}
              <header className="task-header flex jcb aic">
                <div className="left-actions flex aic gap8">
                  <Button size="large" type="primary">
                    <i className="icon-download"></i> 일괄 추가
                  </Button>
                  <Button size="large" type="primary" onClick={addTeamInput}>
                    <i className="icon-plus"></i> 팀 추가
                  </Button>
                  <Button size="large" type="default" onClick={() => setIsEditMode(!isEditMode)}>
                    <i className="icon-sorter"></i> {isEditMode ? '편집 완료' : '순서 편집'}
                  </Button>
                </div>

                <div className="right-actions flex aic gap16">
                  <div className="view-toggles flex aic gap5">
                    <button className="btn btn-view active">리스트 뷰</button>
                    <button className="btn btn-view">조직도 뷰</button>
                  </div>
                  <Search
                    placeholder="팀명"
                    allowClear
                    prefix={<i className="icon-search" style={{ marginRight: 8 }} />}
                    enterButton={
                      <Button type="primary" size="large">
                        검색
                      </Button>
                    }
                    size="large"
                  />
                </div>
              </header>

              {/* 메인 콘텐츠 */}
              <main className="task-content">
                {/* 팀이 없을 때 표시할 내용 */}
                {teamInputs.length === 0 && teamNames.length === 0 && (
                  <div className="task-input-container">
                    <Button size="large" type="text" className="task-btn" onClick={addTeamInput}>
                      <i className="icon-plus-circle"></i> 팀 추가
                    </Button>
                  </div>
                )}

                <div className="task-list empty">
                  {teamInputs.length === 0 && teamNames.length === 0 ? (
                    // 팀이 없을 때 표시할 메시지
                    <div className="empty-state">
                      <i className="icon-empty"></i>
                      <p className="empty-message">아직 팀이 없습니다.</p>
                    </div>
                  ) : (
                    <>
                      <div className="all-num">
                        전체 <span>{teamNames.length}</span>
                      </div>
                      {/* 드래그 앤 드롭 컨텍스트 */}
                      <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="teamName">
                          {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className="teamlist">
                              {teamNames.map((teamName, index) => (
                                <Draggable
                                  key={teamName}
                                  draggableId={teamName}
                                  index={index}
                                  isDragDisabled={!isEditMode}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <TeamItem teamName={teamName} index={index} isEditMode={isEditMode} />
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                      {/* 팀 입력 필드 */}
                      {teamInputs.map((input, index) => (
                        <div key={index} className="team-input-wrap">
                          <div key={index} className="team-input flex aic jcb gap8">
                            <div className="left-item flex  aic gap8">
                              <Input
                                allowClear
                                value={input}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="팀명을 입력하세요"
                                maxLength={50}
                                size="large"
                                status={inputErrors[index] ? 'error' : ''}
                              />
                              <Button
                                type="primary"
                                size="large"
                                onClick={() => {
                                  addTeam(index);
                                }}
                              >
                                추가
                              </Button>
                            </div>
                            <div className="right-item">
                              <Button size="large" onClick={() => removeTeamInput(index)} icon={<CloseOutlined />} />
                            </div>
                            {inputErrors[index] && <div className="error-message">{inputErrors[index]}</div>}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </main>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <>
                종료된 팀 <span className="team-count">0</span>
              </>
            }
            key="2"
          >
            종료된 팀 <span>0</span>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Ant01;
