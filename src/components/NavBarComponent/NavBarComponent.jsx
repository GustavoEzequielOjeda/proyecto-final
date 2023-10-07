import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

import { useCollection } from "../../hooks/useCollection";
import { Link } from "react-router-dom";

function NavBarComponent() {
  const { data, loading } = useCollection("categories");

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container className='nav'>
        <Navbar.Brand><Link to="/">Tienda Gamer</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
            {loading ? null : (
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
            {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link to={`/category/${category}`}>{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBarComponent;