import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import * as actions from '../store/actions/auth'
import {connect} from 'react-redux'
import { NavLink, } from 'react-router-dom'

class Signup extends React.Component {
    Signup = () => {
        const [form] = Form.useForm();
    }  
    onFinish = values => {
          console.log('Received values of form: ', values);
          this.props.onAuth(values.username, values.email, values.password, values.confirm)
          this.props.history.push('/')
    };

    render() {
        return (
            <Form
              form={this.form}
              name="register"
              onFinish={this.onFinish}
              initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
              }}
              scrollToFirstError
            >
              <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                          {
                          required: true,
                          message: 'Please input your username!',
                          },
                      ]}
                      >
                      <Input />
              </Form.Item>   
              
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
        
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              
              <Form.Item>
                      <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                          Signup
                      </Button>
                      or
                      <NavLink style = {{marginLeft: "20px"}} to='/login/'>
                          Login
                      </NavLink>
              </Form.Item>
            </Form>
          );
        };
    }


const mapStateToProps = (state) => {
    return {
      loading: state.loading,
      error: state.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Signup)