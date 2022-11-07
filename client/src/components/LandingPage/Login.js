import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
import "./Login.css";
import React from "react";
const Login = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios
      .put("http://localhost:8080/api/users/login", values, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={() => {
            props.onClick();
          }}
        >
          Log in
        </Button>
        {/* <Link to="register">Register</Link> */}
      </Form.Item>
    </Form>
  );
};
export default Login;
