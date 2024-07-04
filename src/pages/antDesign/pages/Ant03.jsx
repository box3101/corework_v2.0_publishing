import React, { useState } from 'react';
import { Menu, Dropdown, Avatar, Badge, Button, List } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const members = [
  { id: 'MS', name: '강민석', role: '진단개발 / DX리드', subMembers: [] },
  { id: 'NK', name: '고나경', role: '디자이너 / 팀원', subMembers: [] },
  {
    id: 'YH',
    name: '김용현',
    role: 'IT개발 / IT리드',
    subMembers: [
      { id: 'JL', name: '박진록', role: 'IT개발 / 팀원' },
      { id: 'CY', name: '이찬용', role: '퍼블리셔 / 팀원' },
      { id: 'SY', name: '전보현', role: '솔루션총괄 / CPO' },
      { id: 'MK', name: '진미경', role: '서비스기획 / UX리드' },
    ],
  },
];

const Member = ({ member, onClick }) => (
  <div onClick={() => onClick(member)} style={{ cursor: 'pointer', marginBottom: '5px' }}>
    <Avatar style={{ backgroundColor: '#87d068', marginRight: '10px' }} icon={<UserOutlined />} />
    {member.name} - {member.role}
  </div>
);

const MemberList = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMenuClick = (member) => {
    setSelectedMember(member);
  };

  const menu = (
    <Menu style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {selectedMember && selectedMember.subMembers.length > 0 ? (
        selectedMember.subMembers.map((subMember) => (
          <Menu.Item key={subMember.id}>
            <Avatar style={{ backgroundColor: '#87d068', marginRight: '10px' }} icon={<UserOutlined />} />
            {subMember.name} - {subMember.role}
          </Menu.Item>
        ))
      ) : (
        <Menu.Item key="no-submembers">하위 멤버가 없습니다</Menu.Item>
      )}
    </Menu>
  );

  return (
    <div>
      <Badge count={members.length} style={{ backgroundColor: '#f5222d', marginBottom: '10px' }}>
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>멤버</span>
      </Badge>
      <List
        itemLayout="horizontal"
        dataSource={members}
        renderItem={(member) => (
          <List.Item>
            <Dropdown overlay={menu} trigger={['click']} onVisibleChange={() => handleMenuClick(member)}>
              <Button type="link">
                <Member member={member} onClick={handleMenuClick} />
                <DownOutlined />
              </Button>
            </Dropdown>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MemberList;
