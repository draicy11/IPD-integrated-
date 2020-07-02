import React from 'react';
import { Form,  Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import './styless.css';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as actions from '../store/actions/auth';
// import * as actionsCart from '../store/actions/cart';

import { Container, Row, Col } from 'react-bootstrap';



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};



class Login extends React.Component {

  onFinish = values => {
    console.log('Received values of form: ', values);
    this.props.onAuth(values.username , values.password);
    this.props.history.push('/');
  };



  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <h4>{this.props.error.message}</h4>
        );
    }

    return (
          <Container fluid style={{paddingTop: "25px"},{paddingBottom:"35px"},{paddingLeft:"5000px"},{paddingRight:"35px"}} className="login12" >
                <Avatar className="avatar" style={{backgroundColor:"green"}}>
                <LockOutlinedIcon />
              </Avatar>
            <Row  className="justify-content-md-center">
              <Col >
                  <div>
                      {errorMessage}
                      {
                          this.props.loading ?
                          
                          <Spin />
                          
                          :
                        <Container className="justify-content-center" fluid>
                          <Form style={{width: "300px"}} 
                          {...layout}

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
                  
                            <Form.Item>
                              <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                              </Button>
                              <br/> <a href="/signup"> Don't have an account? Sign Up </a>
                            </Form.Item>
                          </Form>
                        </Container>
                      }
                </div>

              </Col>
            </Row>
          </Container>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
         
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


