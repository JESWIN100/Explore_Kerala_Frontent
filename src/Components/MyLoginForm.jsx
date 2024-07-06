// src/Login.js
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link,  useNavigate } from 'react-router-dom';
import useLoginStore from '../store/loginStore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {login} from '../apis'
import useAuthStore from '../store/authStore';

const Login = () => {
  const { setToggle } = useLoginStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const {loginAuth}=useAuthStore()
  const onSubmit =async (data) => {
    
try {
  let res = await login(data)
   console.log(res);
   loginAuth(res.token)
   toast.success('Login Scuessfully 😎')
   navigate('/')
  
} catch (error) {
toast.error(error.response.data.error)
  reset()
}   

  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center d-flex vh-100 ">
        <Col md="4">
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group> */}
            
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <p>
              New?{' '}
              <Link onClick={setToggle} style={{ cursor: 'pointer' }}>
                Signup Here
              </Link>
            </p>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
