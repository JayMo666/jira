import React from "react";
import { useAuth } from "context/auth-context";
import { FormEvent } from "react";
import { Button, Form, Input } from "antd";

export const LoginScreen = () => {
  const { login } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"}></Input>
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" id="password"></Input>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        登录
      </Button>
    </Form>
  );
};
