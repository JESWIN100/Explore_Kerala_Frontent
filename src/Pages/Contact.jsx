import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Headers from '../Components/Header'; // Ensure you have Headers component imported
import './ContactForm.css'; // Add this line to import your custom CSS file
import Footer from '../Components/Footer';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullnameError: '',
    emailError: '',
    phoneError: '',
    commentError: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, phone, comment } = formData;
    const fullnamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phonePattern = /^[0-9]{10}$/;

    let isValid = true;
    const newErrors = {};

    if (!fullnamePattern.test(fullname)) {
      newErrors.fullnameError = 'Please enter your full name (first & last name)!';
      isValid = false;
    } else {
      newErrors.fullnameError = '';
    }

    if (!emailPattern.test(email)) {
      newErrors.emailError = 'Please enter a valid email address!';
      isValid = false;
    } else {
      newErrors.emailError = '';
    }

    if (!phonePattern.test(phone)) {
      newErrors.phoneError = 'Please enter a valid 10-digit phone number!';
      isValid = false;
    } else {
      newErrors.phoneError = '';
    }

    if (comment.length < 3 || comment.length > 150) {
      newErrors.commentError = 'Comment should contain between 3 and 150 characters!';
      isValid = false;
    } else {
      newErrors.commentError = '';
    }

    setFormErrors(newErrors);

    if (isValid) {
      alert('Submitted Successfully');
      window.location.reload();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Headers />
      <section id="contact" className="full-height px-lg-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h6 className="text-brand">CONTACT</h6>
              <h1>Interested in Watching Together? Let's Talk</h1>
            </Col>
            <Col lg={8} className="pb-4">
              <Form id="submit-form" name="myForm" onSubmit={handleSubmit} className="row g-lg-3 gy-3">
                <Form.Group as={Col} md={6} controlId="fullname">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.fullnameError && <Alert variant="danger">{formErrors.fullnameError}</Alert>}
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.emailError && <Alert variant="danger">{formErrors.emailError}</Alert>}
                </Form.Group>

                <Form.Group as={Col} md={12} controlId="phone">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.phoneError && <Alert variant="danger">{formErrors.phoneError}</Alert>}
                </Form.Group>

                <Form.Group as={Col} md={12} controlId="comment">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter Your Message"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.commentError && <Alert variant="danger">{formErrors.commentError}</Alert>}
                </Form.Group>

                <Form.Group as={Col} className="d-grid">
                  <Button type="submit" className="btn-brand">
                    Contact Me
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  );
}

export default ContactForm;
