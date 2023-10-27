import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function Navigation() {

    const cartProducts = useSelector(state => state.cart)

    return (
            <>
            <Navbar expand="lg">
                <Container fluid>
                <Navbar.Brand href="#home">Shopping</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <Outlet />
            </main>
            </>
    )
}   