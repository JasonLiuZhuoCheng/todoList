import { Form, Input, Button, Checkbox, Spin} from 'antd';
import React from 'react'
import { NavLink, } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons';
import {connect } from 'react-redux'
import * as actions from '../store/actions/auth'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


class Login extends React.Component {

  onFinish = values => {
      console.log('Success:', values);
      this.props.onAuth(values.username, values.password)
      this.props.history.push('/')
  };
 
 onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  
    render() {
      let errorMessage = null
      if (this.props.error) {
        errorMessage = (
          <p>{this.props.error.message}</p>
        )
      }
      return (
        <div>
          {
            this.props.loading ?
            
            <Spin indicator={antIcon} />
  
            :
            
            <Form
              name="basic"
              initialValues={{
              remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
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
              label="Password"
              name="password"
              rules={[
                  {
                  required: true,
                  message: 'Please input your password!',
                  },
              ]}
              >
              <Input.Password />
              </Form.Item>
      
              <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
              </Form.Item>
      
              <Form.Item>
              <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                  Login
              </Button>
              or
              <NavLink style = {{marginLeft: "20px"}} to='/signup/'>
                  Signup
              </NavLink>
              </Form.Item>
          </Form>
          }
        </div>
      );
    }
}
    
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Login)



