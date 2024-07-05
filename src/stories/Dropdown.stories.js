import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

// default export를 추가합니다.
export default {
  title: 'Ant Design/Dropdown',
  component: Dropdown,
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    },
    trigger: {
      control: { type: 'inline-check' },
      options: ['hover', 'click'],
    },
  },
};

const Template = (args) => {
  const items = [
    { key: '1', label: '멤버 1' },
    { key: '2', label: '멤버 2' },
    { key: '3', label: '멤버 3' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMembersClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleVisibleChange = (visible) => {
    setIsDropdownOpen(visible);
  };

  return (
    <Dropdown menu={{ items }} {...args} onVisibleChange={handleVisibleChange}>
      <a onClick={handleMembersClick}>
        <Space>
          멤버 <span>{items.length}명</span>
          {isDropdownOpen ? <UpOutlined /> : <DownOutlined />}
        </Space>
      </a>
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
  trigger: ['click'],
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  placement: 'bottomLeft',
  trigger: ['hover'],
};

export const TopPlacement = Template.bind({});
TopPlacement.args = {
  placement: 'topLeft',
  trigger: ['click'],
};
