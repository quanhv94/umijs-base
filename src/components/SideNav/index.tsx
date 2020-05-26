import React from 'react';
import { Link, useLocation } from 'umi';
import classNames from 'classnames';
import homeIcon from '@/assets/icons/home.svg';
import styles from './styles.less';

const routes = [
  {
    text: 'Home',
    url: '/index',
    icon: homeIcon,
  },
  {
    text: 'Projects',
    url: '/projects',
    icon: homeIcon,
  },
];

export default function SideNav() {
  const location = useLocation();
  return (
    <div className={styles.sideNav}>
      <div className={styles.sideMenu}>
        {routes.map(item => (
          <Link
            key={item.url}
            className={classNames({
              [styles.menuItem]: true,
              [styles.menuItemActive]: location.pathname.includes(item.url),
            })}
            to={item.url}
          >
            <img src={item.icon} alt="" />
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
