import React from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import Logo from './Logo';

const Sidebar = ({ collapse }) => {
  return (
    <Sider style={{}} theme="light" collapsed={collapse}>
      <Logo />
      <Menu style={{ height: '88vh' }} className="flex-column justify-between">
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Operations</MenuItem>
        <MenuItem>Devices</MenuItem>
        <MenuItem>AccessControl</MenuItem>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
