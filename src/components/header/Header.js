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
        <NavbarBrand tag={RRNavLink} to="/">
          Umsóknarferli
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/diagram">
              Diagram
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/new">
              Ný umsókn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/applications">Breyta umsóknir</NavLink>
          </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {auth.isAuthenticated && (
              <User />
            )}

            {!auth.isAuthenticated && (
              <NavItem>
                <NavLink tag={RRNavLink} to="/login">
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