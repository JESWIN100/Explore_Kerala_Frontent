import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for custom styles
import { NavDropdown } from 'react-bootstrap';
import useAuthStore from '../store/authStore';
import { toast } from 'react-toastify';

function Header() {
 
  const navigate =useNavigate()
const {logoutAuth}=useAuthStore()

  const toLogout=()=>{
    logoutAuth()
toast.info("logout Scuessfully")
    
      navigate('/login');
    
}

  


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src='https://miro.medium.com/v2/resize:fit:835/1*UmSF9883AXvP_1_ZS4Pi8Q.png' 
            alt="Kerala, Gods Own Country logo" 
            className='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            
            <NavDropdown title='user' id="basic-nav-dropdown">
              <NavDropdown.Item onClick={toLogout}>Log Out</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
