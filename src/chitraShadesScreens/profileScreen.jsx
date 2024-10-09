import React, { useState } from 'react';
import { Button, Input, Form, Typography, message } from 'antd';
import "../styles/profile.scss"; // Ensure this file exists
import image from "../assets/chaithuLogo.png"; // Ensure the path is correct

const { Text } = Typography;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = Form.useForm();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    form.resetFields(); 
  };

  const handleSubmit = async (values) => {
    if (isLogin) {
      
      console.log('Login:', values);
      // Call your API here
      message.success('Logged in successfully');
    } else {
      // Perform signup action
      console.log('Signup:', values);
      // Call your API here
      message.success('Signed up successfully');
    }
    
    form.resetFields(); // Reset fields after submission
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-logo">
          <img src={image} width="150" alt="logo" />
        </div>
        <h2>{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>
        
        <Form form={form} className="auth-form" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters.' }
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          
          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          )}
          
          <Button type="primary" htmlType="submit" block>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          
          <Text className="switch-text" onClick={toggleForm}>
            {isLogin ? 'Create new account' : 'Already have an account? Login here'}
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default Auth;
