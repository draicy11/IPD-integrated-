import React from 'react';
import { Form,  Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import './styless.css';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as actions from '../store/actions/auth';
import {withRouter} from 'react-router-dom';
// import * as actionsCart from '../store/actions/cart';

import { Container, Row, Col, Card } from 'react-bootstrap';



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
    // let errorMessage = null;
    // if (this.props.error) {
    //     errorMessage = (
    //         <h4>{this.props.error.message}</h4>
    //     );
    // }

    return (
      
      <div style={{paddingTop: "10px"}}>
      <Card className="shadow bg-light moving  mx-auto" border="#e6e6e6" bg="light"  >
        <Card.Body style={{backgroundColor:"#f7f7f7"}}>
          <Container fluid style={{paddingRight:"32px"}} className="login123" >
                <Avatar className="avatar" style={{backgroundColor:"green"}}>
                <LockOutlinedIcon />
              </Avatar>
            <Row  className="justify-content-md-center">
              <Col >
                  <div>
                      
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
                              <br/> <a href="/signup" style={{fontFamily:"arial"}} > Don't have an account? Sign Up </a>
                            </Form.Item>
                          </Form>
                        </Container>
                      }
                </div>

              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <div style={{paddingTop: "10px"}}></div>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
         
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


