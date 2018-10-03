import React from 'react';
import logo from './logo.png';
import facebookLogo from './facebook-circle.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './NavBar.css';

export default ({isOpen, toggle}) => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src={logo} className="App-logo" alt="logo"/> Mobila Lui Jhon
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className={"navbar-center-align"}>
                                Contact
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className={"navbar-center-align"}>
                                    <a href="mailto:bapostol91@yahoo.com">bapostol91@yahoo.com</a>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem className={"navbar-center-align"}>
                                    <NavLink href="https://www.facebook.com/ioan.apo.3">
                                        <img height={26} src={facebookLogo} alt="logo"/> Jhon Apostol</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}