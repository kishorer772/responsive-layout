import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown } from 'antd';

import React from 'react';

const Header = ({ isCollapsed, collapseHandler }) => {
  const items = [
    {
      label: 'Edit',
      key: '1',
      // icon: <UserOutlined />,
    },

    {
      label: 'Change Password',
      key: '2',
      // icon: <UserOutlined />,
      danger: true,
    },
    {
      label: 'Logout',
      key: '3',
      // icon: <UserOutlined />,
      danger: true,
      disabled: false,
    },
  ];

  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <nav className="flex w-full h-11 p-2">
      {isCollapsed ? (
        <MenuUnfoldOutlined
          style={{ fontSize: '1.5rem' }}
          onClick={collapseHandler}
          className="bg-fixed "
        />
      ) : (
        <MenuFoldOutlined
          style={{ fontSize: '1.5rem' }}
          onClick={collapseHandler}
          className="bg-fixed"
        />
      )}
      <div className="w-1/2">
        <h3 className="text-right">ABC Corps</h3>
      </div>
      <div className="px-2 flex justify-end align-top w-1/2 pe-3">
        <Dropdown menu={menuProps} onClick={handleMenuClick}>
          <UserOutlined
            className="text-white bg-slate-400 p-2 rounded-2xl "
            color="green"
          />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Header;
