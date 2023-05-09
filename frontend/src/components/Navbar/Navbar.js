import React from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'selected' : '';
    };

    return (
        <Nav className="justify-content-center">
            <Nav.Item className={isActive('/dashboard')}>
                <NavLink
                    to="/dashboard"
                    className="nav-link"
                >
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive('/homework')}>
                <NavLink
                    to="/homework"
                    className="nav-link"
                >
                    HW
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive('/contest')}>
                <NavLink
                    to="/contest"
                    className="nav-link"
                >
                    Contest
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive('/course')}>
                <NavLink
                    to="/course"
                    className="nav-link"
                >
                    Course
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive('/setting')}>
                <NavLink
                    to="/setting"
                    className="nav-link"
                >
                    Setting
                </NavLink>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar;
