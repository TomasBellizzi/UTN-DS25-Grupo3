import '../styles/Header.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/logoUniversal.png';


function Header() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Image src={logo} height="70" />
          <span>Asociación Cultural y Deportiva Universal</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;