import React, { ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Redirect, useDispatch } from 'umi';
import PageHeader from '@/components/PageHeader';
import SideNav from '@/components/SideNav';
import styles from './styles.less';
import { loadProfile } from '@/actions/profile';

interface IProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: IProps) {
  const isAuthenticated = !!Cookies.get('token');
  if (!isAuthenticated) return <Redirect to="/login" />;

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadProfile());
    }
  }, []);
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
