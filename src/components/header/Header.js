import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';

import User from '../user';

import './Header.css';

const basename = process.env.PUBLIC_URL;

class Header extends Component {

  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { auth } = this.props;

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RRNavLink} to={`${basename}/`}>
          Umsóknarferli
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to={`${basename}/diagram`}>
              Diagram
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to={`${basename}/new`}>
              Ný umsókn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to={`${basename}/applications`}>Breyta umsóknir</NavLink>
          </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {auth.isAuthenticated && (
              <User />
            )}

            {!auth.isAuthenticated && (
              <NavItem>
                <NavLink tag={RRNavLink} to={`${basename}/login`}>
                  <Button color="primary">Innskráning</Button>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(Header);