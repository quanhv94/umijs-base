import React, { useEffect } from 'react';
import { connect, Dispatch, History } from 'umi';
import Cookies from 'js-cookie';
import { Card } from 'antd';
import LoginForm from './Form';
import styles from './style.less';

interface IProps {
  history: History;
  dispatch: Dispatch;
}

function Login({ history, dispatch }: IProps) {
  useEffect(() => {
    if (Cookies.get('token')) {
      history.push('/');
    }
  }, []);

  const handleSubmit = (payload: any) => {
    dispatch({ type: 'authentication/login', payload, history });
  };

  return (
    <div className={styles.loginContainer}>
      <Card bordered className={styles.loginForm}>
        <LoginForm onSubmit={handleSubmit} />
      </Card>
    </div>
  );
}
export default connect()(Login);
