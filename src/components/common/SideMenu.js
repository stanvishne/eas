import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <div className="side-bar-menu">
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
                        <NavDropdown title="Отчеты" id="basic-nav-dropdown">
                            <LinkContainer to="/report1">
                                <MenuItem>Отчет 1</MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <LinkContainer to="/report2">
                                <MenuItem>Отчет 2</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </NavDropdown>
                </Nav>
            </div>
        );
    }
}

export default Menu;
