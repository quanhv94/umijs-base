import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'umi';
import { Menu, Button, Row } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  TableOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from './styles.less';

const { SubMenu } = Menu;

const routes = [
  {
    key: '1',
    text: 'Home',
    url: '/',
    icon: <HomeOutlined />,
  },
  {
    key: '2',
    text: 'Tasks',
    url: '/tasks',
    icon: <TableOutlined />,
  },
  {
    key: '3',
    text: 'Settings',
    icon: <SettingOutlined />,
    children: [
      {
        key: '3.1',
        text: 'Setting 1',
        url: '/settings/setting1',
      },
      {
        key: '3.2',
        text: 'Setting 2',
        url: '/settings/setting2',
      },
    ],
  },
];

export default function SideNav() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);
  const [selectedKey, setSelectedKey] = useState('1');

  useEffect(() => {
    routes.forEach(route => {
      if (location.pathname.startsWith(route.url || '###')) {
        setSelectedKey(route.key);
      }
      if (route.children) {
        route.children.forEach(route => {
          if (location.pathname.startsWith(route.url || '###')) {
            setSelectedKey(route.key);
          }
        });
      }
    });
  }, [location.pathname]);

  return (
    <div className={styles.sideNav}>
      <Row justify="end">
        <Button onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Row>
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={['3']}
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ width: collapsed ? 80 : 250, transition: 'width 0.3s' }}
      >
        {routes.map(route => {
          if (route.children) {
            return (
              <SubMenu key={route.key} icon={route.icon} title={route.text}>
                {route.children?.map(childRoute => (
                  <Menu.Item key={childRoute.key}>
                    <Link to={childRoute.url}>{childRoute.text}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={route.key} icon={route.icon}>
              <Link to={route.url}>{route.text}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
}
