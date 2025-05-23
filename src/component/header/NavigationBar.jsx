import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.css'
import Logo from '../../assets/images/Logo.png'
const NavigationBar = () => {
    return (
        <div className=' w-100 d-flex header background'>
            <Navbar expand="lg" className=" w-100 ">
                <Container className=' cont'>
                    <Navbar.Brand className='brand' href="#home"><img src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex gap-5">
                            <Nav.Link href="#home">Destinations</Nav.Link>
                            <Nav.Link href="#link">Hotels</Nav.Link>
                            <Nav.Link href="#link">Flights</Nav.Link>
                            <Nav.Link href="#link">Bookings</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Nav.Link href="#link">Sign up</Nav.Link>
                            <NavDropdown title="EN" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ES</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    FR
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">DE</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar