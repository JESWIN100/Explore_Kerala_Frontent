// src/NotFound.js

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <motion.div
                        initial={{ y: -1000 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        <Alert variant="danger">
                            <h1>404</h1>
                            <p>Page Not Found</p>
                        </Alert>
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <p>The page you are looking for does not exist.</p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound; 
