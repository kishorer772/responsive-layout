import { Layout } from 'antd';
import React from 'react';
import Header from './Header';
import AppContent from './AppContent';

const AppLayout = ({ children, collapseHandler }) => {
  return (
    <Layout className="flex-row">
      {children}
      <Header collapseHandler={collapseHandler}></Header>
    </Layout>
  );
};

export default AppLayout;
