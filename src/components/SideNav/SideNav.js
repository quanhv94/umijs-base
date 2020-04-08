import React from 'react';
import assignmentIcon from '@/assets/icons/assignment.svg';
import { Link } from 'umi';
import styles from './styles.less';

const routes = [
  {
    text: 'Project',
    url: '/projects',
    icon: assignmentIcon,
  },
];

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div className={styles.sideMenu}>
        {routes.map((item) => (
          <Link key={item.url} className={styles.menuItem} to={item.url}>
            <img src={item.icon} alt="" />
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
