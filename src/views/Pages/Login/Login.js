import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { log } from 'util';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import {get,post} from '../../../ajax';
//import post from '../../../ajax';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: '',
      loginPw:'',
      posts:[]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    
     get('/country/countieslist/185',false).then((posts)=>{
              this.state.posts = posts.data.result;
              console.log(this.state.posts)
          });
    
      } 

  handleClick() {
    console.log(this.state)
    let data={
      loginId:this.state.loginId,
      loginPw:this.state.loginPw
    }
    post('/login',false,data).then((posts)=>{
      this.state.posts = posts.data.result;
      console.log(this.state.posts)
    
      let { history } = this.props;
        history.push({
        pathname: '/dashboard',
 //search: 'name=jhon&amp;age=24'
        });
     

  })
 .catch(err => console.log(err))
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
    
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" value={this.state.loginId} onChange={this.handleChange('loginId')} placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"  value={this.state.loginPw} onChange={this.handleChange('loginPw')} placeholder="Password" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.handleClick.bind(this)}>Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
