import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'umi';
import { Menu, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import homeIcon from '@/assets/icons/home.svg';
import assignmentIcon from '@/assets/icons/assignment.svg';
import styles from './styles.less';

const { SubMenu } = Menu;

const routes = [
  {
    key: '1',
    text: 'Home',
    url: '/index',
    icon: homeIcon,
  },
  {
    key: '2',
    text: 'Projects',
    url: '/projects',
    icon: assignmentIcon,
  },
  {
    key: '3',
    text: 'Settings',
    icon: homeIcon,
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
      <Button onClick={toggleCollapsed}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        selectedKeys={[selectedKey]}
        defaultOpenKeys={['3']}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {routes.map(route => {
          if (route.children) {
            return (
              <SubMenu
                key={route.key}
                icon={<img className="anticon" src={route.icon} />}
                title={route.text}
              >
                {route.children?.map(childRoute => (
                  <Menu.Item key={childRoute.key}>
                    <Link to={childRoute.url}>{childRoute.text}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item
              key={route.key}
              icon={<img className="anticon" src={route.icon} />}
            >
              <Link to={route.url}>{route.text}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
}
