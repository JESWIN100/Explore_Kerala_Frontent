import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signup } from '../apis';
import useLoginStore from '../store/loginStore';

const Signup = () => {
  const { setToggle } = useLoginStore();
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      let res = await signup(data);
      console.log(res.data);
      
      toast.success('Signup successfully 🥳');
      reset();
    } catch (error) {
      toast.error(error.response.data.error);
      reset();
    }
  };

  const password = watch('password');

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h2 className="text-center">Signup</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicName">
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
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address'
                  }
                })}
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
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 4,
                    message: 'Password must be at least 4 characters long'
                  }
                })}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: value =>
                    value === password || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && (
                <Form.Text className="text-danger">
                  {errors.confirmPassword.message}
                </Form.Text>
              )}
            </Form.Group>
            <p>
              Already Existing?{' '}
              <Link onClick={setToggle} style={{ cursor: 'pointer' }}>
                Login Here
              </Link>
            </p>

            <Button variant="primary" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
