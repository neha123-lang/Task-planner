import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap'

const Login = ({ onLogin }) => {
  
  return (
    <div className='login'>
      <Container>
        <Container>
          <Col md={{ span: 3, offset: 3 }} className='Heading'>
            <div className='logo'>
              <h2>LOGO</h2>
            </div>
            <p>Sign in to Time-planner</p>
          </Col>
        </Container>
        
        <Col md={{ span: 3, offset: 3 }} xs={6} className='text-field'>
          <Form className="mb-4">
            <Form.Control type="text" placeholder='User Name' required />

            <Navbar><Nav>
              < Nav.Link as={NavLink} to='/forgetPassword'>forget password?</Nav.Link>


            </Nav></Navbar>
            <Form.Control htmlFor="inputPassword5" type="password" placeholder='Password' required />
            <Button className="mt-4" type="submit" value="submit" onClick={onLogin}> submit</Button>
          </Form>
          <Navbar><Nav>
            < Nav.Link as={NavLink} to="/Register">New User?</Nav.Link>

          </Nav></Navbar>
        </Col>
      </Container>
    </div>

  )
}

export default Login