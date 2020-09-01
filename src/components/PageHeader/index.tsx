import React from 'react';
import avatarImg from '@/assets/images/avatar.svg';
import { Link, useSelector, useDispatch } from 'umi';
import styles from './styles.less';
import { Menu, Dropdown } from 'antd';
import { logout } from '@/actions/authentication';

export default function PageHeader() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const profile = useSelector((state: any) => state.profile);

  const menu = (
    <Menu style={{ minWidth: 200 }}>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Change Password</Menu.Item>
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
          <Dropdown overlay={menu} trigger={['click']}>
            <div>
              <span>Hi {profile?.fullName || profile?.username}!</span>
              &nbsp;
              <img className={styles.icon} src={avatarImg} alt="" />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
