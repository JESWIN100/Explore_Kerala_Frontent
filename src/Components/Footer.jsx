import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-secondary text-white text-center">
      <Container>
        <p>&copy; 2024 Your Company. All rights reserved. | <a href="#" className="text-white">Privacy Policy</a> | <a href="#" className="text-white">Terms of Service</a></p>
      </Container>
    </footer>
  );
}

export default Footer;
