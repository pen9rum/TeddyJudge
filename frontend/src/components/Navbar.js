import React from 'react';
import './Navbar.css'
import { Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/dashboard">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/homework">HW</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Contest</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Course</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Setting</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar;
