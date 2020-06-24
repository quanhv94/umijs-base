import React from 'react';
import { Input, Button, Form, Row, Checkbox } from 'antd';

interface IProps {
  onSubmit: (values: any) => void;
}

export default function({ onSubmit }: IProps) {
  return (
    <Form onFinish={onSubmit}>
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
      <div>
        <p>Username: admin</p>
        <p>password: 123456</p>
      </div>
    </Form>
  );
}
