import React from 'react';
import { Layout } from 'antd';
import './index.css';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header className="app-header">
      <h1 style={{textAlign:"center"}}>Weather Information App</h1>
    </Header>
  );
}

export default AppHeader;
