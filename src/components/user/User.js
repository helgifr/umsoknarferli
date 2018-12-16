import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

import { Button, NavItem } from 'reactstrap';

import './User.scss';

class User extends Component {

  handleLogout = (e) => {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  render() {
    const { auth } = this.props;
    const { name } = auth.user || {};

    return (
      <React.Fragment>
        <NavItem className="user__nav-item"><p>Skráð/ur inn sem: <strong>{name}</strong></p></NavItem>
        <NavItem className="user__nav-item"><Button color="danger" size="sm" onClick={this.handleLogout}>Útskrá</Button></NavItem>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(User);