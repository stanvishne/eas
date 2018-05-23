import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const Menu = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>EASAPR-REACT</Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <IndexLinkContainer to="/">
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/about">
                    <NavItem>About</NavItem>
                </LinkContainer>
                <NavDropdown title="Отчеты" id="basic-nav-dropdown">
                    <LinkContainer to="/report1">
                        <MenuItem>Отчет 1</MenuItem>
                    </LinkContainer>
                    <MenuItem divider />
                    <LinkContainer to="/report2">
                        <MenuItem>Отчет 2</MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
};

export default Menu;
