import React, { useContext } from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { RoleContext } from '../Auth/RoleContext';

const Navbar = () => {
    const location = useLocation();
    const { role } = useContext(RoleContext);

    const isActive = (path) => {
        return location.pathname.startsWith(path) ? 'selected' : '';
    };


    // 依照 role 給定不同的路由前綴
    const prefix = role === 'teacher' ? '/t' : '/';

    return (
        <Nav className="justify-content-center">
            <Nav.Item className={isActive(prefix + 'dashboard')}>
                <NavLink
                    to={prefix + "dashboard"}
                    className="nav-link"
                >
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive(prefix + 'homework')}>
                <NavLink
                    to={prefix + "homework"}
                    className="nav-link"
                >
                    HW
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive(prefix + 'contest')}>
                <NavLink
                    to={prefix + "contest"}
                    className="nav-link"
                >
                    Contest
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive(prefix + 'course')}>
                <NavLink
                    to={prefix + "course"}
                    className="nav-link"
                >
                    Course
                </NavLink>
            </Nav.Item>
            <Nav.Item className={isActive(prefix + 'setting')}>
                <NavLink
                    to={prefix + "setting"}
                    className="nav-link"
                >
                    Setting
                </NavLink>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar;
