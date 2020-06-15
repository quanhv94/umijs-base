import React, { useEffect } from 'react';
import { useHistory, useDispatch } from 'umi';
import Cookies from 'js-cookie';
import { Card } from 'antd';
import LoginForm from './Form';
import styles from './style.less';
import { login } from '@/actions/authentication';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get('token')) {
      history.push('/');
    }
  }, []);

  const handleSubmit = (payload: any) => {
    dispatch(login(payload));
  };

  return (
    <div className={styles.loginContainer}>
      <Card bordered className={styles.loginForm}>
        <LoginForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
}
