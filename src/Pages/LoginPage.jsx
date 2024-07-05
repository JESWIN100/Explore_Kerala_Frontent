import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useLoginStore from '../store/loginStore';
import MyLoginForm from '../Components/MyLoginForm'
import SignupForm from '../Components/SignupForm;'


function LoginPage() {
  const { isToggle } = useLoginStore();

  console.log('LoginPage rendered with isToggle:', isToggle);

  return (
    <div>
      <Container fluid className="">
        <Row className="m-auto align-self-center">
          <Col>
            {isToggle ? <MyLoginForm /> : <SignupForm />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
