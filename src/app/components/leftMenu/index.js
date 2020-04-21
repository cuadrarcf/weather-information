import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Layout, Menu } from 'antd';
import { WarningOutlined, EnvironmentOutlined, FieldTimeOutlined } from '@ant-design/icons';
import './index.css';

const { Sider } = Layout;

export function LeftMenu() {
  const pathname = document.location.pathname;
  const selected = [pathname === '/' ? '/alerts' : pathname];

  return (
    <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
    >
      <div className="logo-container">
        <div className="logo" />
      </div>

      <Divider>Menu</Divider>

      <Menu theme="light" defaultSelectedKeys={selected} mode="inline">
        {menu.map((item, pos) => {
          const MenuIcon = item.icon;
          return (
            <Menu.Item key={item.path}>
              <MenuIcon />
              {/*<span>{item.label}</span>*/}
              <Link to={`${item.path}`}>{item.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}


/**
 * App Dynamic Left Menu
 * */
const menu = [
  {
    path: '/alerts',
    label: 'Alerts',
    icon: () => <WarningOutlined />,
  },
  {
    path: '/zones',
    label: 'Zones',
    icon: () => <EnvironmentOutlined />,
  },
  {
    path: '/stations',
    label: 'Stations',
    icon: () => <FieldTimeOutlined />,
  },
];

