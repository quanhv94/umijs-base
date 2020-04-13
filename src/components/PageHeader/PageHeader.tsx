import React from 'react';
import avatarImg from '@/assets/images/avatar.svg';
import { Link } from 'umi';
import { HelpIcon, NotificationIcon } from '../Icons/Icons';
import styles from './styles.less';

export default function PageHeader() {
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
          <img className={styles.icon} src={avatarImg} alt="" />
        </div>
      </div>
    </div>
  );
}
