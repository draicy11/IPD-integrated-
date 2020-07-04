import React from 'react';
import { Form,  Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './styless.css'



class SignUp extends React.Component {

  onFinish = values => {
    console.log('Received values of form: ', values);
    this.props.onAuth(
      values.username ,
      values.email,
      values.password,
      values.confirm
      );
    this.props.history.push('/');
  };



  render() {

    return (
        <div >
        <Avatar className="avatar1" style={{backgroundColor:"red"}}>
        <LockOutlinedIcon />
      </Avatar>

              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input  placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="email"
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
                  <Input  placeholder="E-mail" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item
                  name="confirm"
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
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
      
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
                  </Button>
                  <br/> <a href="/login">Already have an account? Log in</a>
                </Form.Item>
              </Form>
            
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
        onAuth: (username, email, password1 , password2) => dispatch(actions.authSignup(username,email, password1, password2)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);