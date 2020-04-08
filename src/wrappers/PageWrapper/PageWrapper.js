import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Redirect, connect } from 'umi';
import PageHeader from '@/components/PageHeader/PageHeader';
import SideNav from '@/components/SideNav/SideNav';
import styles from './styles.less';

function PageWrapper({ children, dispatch }) {
  const isAuthenticated = !!Cookies.get('token');
  if (!isAuthenticated) return <Redirect to="/login" />;
  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ type: 'masterData/loadMasterData' });
    }
  }, [dispatch]);
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

export default connect()(PageWrapper);
