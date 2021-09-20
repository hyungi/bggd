import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="Navigation">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">BGGD</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/logo">Logo</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
