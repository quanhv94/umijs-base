import React, { useEffect } from 'react';
import { useHistory, useDispatch } from 'umi';
import Cookies from 'js-cookie';
import {} from 'antd';
import styles from './style.less';
import { login } from '@/actions/authentication';
import { Card, Input, Button, Form, Row, Checkbox } from 'antd';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get('token')) {
      history.push('/');
    }
  }, []);

  const navigateToSignUp = () => history.push('/sign-up');

  const handleSubmit = (payload: any) => {
    dispatch(login(payload));
  };

  return (
    <div className={styles.loginContainer}>
      <Card bordered className={styles.loginForm}>
        <Form onFinish={handleSubmit}>
          <Row justify="center">
            <h2>LOGIN</h2>
          </Row>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Username is required!' }]}
            labelAlign="left"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required!' }]}
            labelAlign="left"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }}>
            <Button
              block
              type="dashed"
              htmlType="button"
              onClick={navigateToSignUp}
            >
              Sign Up
            </Button>
          </Form.Item>
          <div>
            <p>Account: admin / 123456</p>
          </div>
        </Form>
      </Card>
    </div>
  );
}
