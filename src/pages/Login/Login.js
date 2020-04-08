import React, { useEffect } from 'react';
import { connect } from 'umi';
import Cookies from 'js-cookie';
import { Card } from 'antd';
import LoginForm from './Form';
import styles from './style.less';

function Login({ history, dispatch }) {
  useEffect(() => {
    if (Cookies.get('token')) {
      history.push('/');
    }
  }, []);

  const handleSubmit = (payload) => {
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
