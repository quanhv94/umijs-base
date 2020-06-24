import React, { useState } from 'react';
import avatarImg from '@/assets/images/avatar.svg';
import { Link, useHistory } from 'umi';
import Cookies from 'js-cookie';
import { HelpIcon, NotificationIcon } from '../Icons';
import styles from './styles.less';
import { Menu, Dropdown } from 'antd';

export default function PageHeader() {
  const history = useHistory();
  const handleLogout = () => {
    history.push('/login');
    Cookies.remove('token');
  };

  const menu = (
    <Menu style={{ minWidth: 200 }}>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Setting</Menu.Item>
      <Menu.Item key="3" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.headerWrapper}>
      <Link className={styles.logo} to="/index">
        HOME
      </Link>
      <div className={styles.menuWrapper}>
        <div className={styles.menuItem}>
          <HelpIcon />
        </div>
        <div className={styles.menuItem}>
          <NotificationIcon />
          <span className={styles.badge}>4</span>
        </div>
        <div className={styles.menuItem}>
          <Dropdown overlay={menu} trigger={['click']}>
            <img className={styles.icon} src={avatarImg} alt="" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
