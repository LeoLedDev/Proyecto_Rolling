import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';
import '../css/Navbar.css'




const NavbarH = () => {
  return (
    <>
      <Navbar  expand="lg" className="">
        <Container>
          <Navbar.Brand to="/"><img id='logo' src="" height="100px" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={'nav-link text-white'}>Inicio</NavLink>
              <NavLink to="/about" className={'nav-link text-white'}>Nosotros</NavLink>
              <NavLink to="/contact" className={'nav-link text-white'}>Contacto</NavLink>
              <NavLink to="/product" className={'nav-link text-white'}>Servicios</NavLink>
              <NavLink to="/product" className={'nav-link text-white'}>Habitaciones</NavLink>
              
            </Nav>

            <Nav className="ms-auto">
              <NavLink to="/login" className={'nav-link text-white'} >Iniciar Sesion</NavLink>
              <NavLink to="/register" className={'nav-link text-white'}>Registrarse</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default NavbarH