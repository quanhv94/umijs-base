import React, { ReactNode } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'umi';
import PageHeader from '@/components/PageHeader/PageHeader';
import SideNav from '@/components/SideNav/SideNav';
import styles from './styles.less';

interface IProps {
  children: ReactNode;
}

function PageWrapper({ children }: IProps) {
  const isAuthenticated = !!Cookies.get('token');
  if (!isAuthenticated) return <Redirect to="/login" />;
  return (
    <div className={styles.pageWrapper}>
      <PageHeader />
      <div className={styles.mainWrapper}>
        <SideNav />
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
}

export default PageWrapper;
