import React from 'react';
import { Button, Space } from 'antd';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';

export default {
  title: 'Ant Design/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select', options: ['primary', 'default', 'dashed', 'text', 'link'] },
    },
    size: {
      control: { type: 'select', options: ['large', 'middle', 'small'] },
    },
    shape: {
      control: { type: 'select', options: ['default', 'circle', 'round'] },
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    ghost: { control: 'boolean' },
    danger: { control: 'boolean' },
    block: { control: 'boolean' },
    icon: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
  children: 'Dashed Button',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  children: 'Text Button',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  children: 'Link Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  children: 'Loading Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  ghost: true,
  children: 'Ghost Button',
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  children: 'Danger Button',
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  children: 'Block Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <i class="ico-download"></i>,
  children: 'Search',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  icon: <SearchOutlined />,
  shape: 'circle',
};

export const ButtonGroup = () => (
  <Space direction="vertical">
    <Button.Group>
      <Button type="primary">Button 1</Button>
      <Button type="primary">Button 2</Button>
      <Button type="primary">Button 3</Button>
    </Button.Group>
    <Button.Group>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Button.Group>
  </Space>
);

export const MultipleButtons = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  style: { background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', borderColor: 'transparent', color: 'white' },
  children: 'Custom Color Button',
};