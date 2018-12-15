import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/auth';
import { Redirect, Link } from 'react-router-dom';

import { Button, Container, Row, Col } from 'reactstrap';

import { FieldGroup } from '../../utils/bs';

class Login extends Component {

  state = {
    username: '',
    password: '',
    validationState: null,
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { username, password } = this.state;

    dispatch(loginUser(username, password));
  }

  handleLogout = (e) => {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  render() {
    const { username, password } = this.state;
    const { location, isFetching, isAuthenticated, message } = this.props;

    const tokenExpired = location.search.indexOf('tokenExpired') >= 0;

    if (isAuthenticated) {
      try {
        const { pathname } = location.state.from;
        return (
          <Redirect to={pathname} />
        );
      } catch (e) {
        return (
          <Redirect to="/" />
        );
      }
    }

    return (
      <div className="login">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <h2>Innskráning</h2>

              {tokenExpired &&
                <p>Innskráning er útrunnin</p>
              }

              {message &&
                <p className="login__error">{message}</p>
              }

              {isFetching &&
                <p className="login__message">Skrái inn <em>{username}</em>...</p>
              }

              <form onSubmit={this.handleSubmit}>
                <FieldGroup
                  id="formControlsUsername"
                  type="text"
                  label="Username"
                  name="username"
                  autoFocus
                  valid={null}
                  onChange={this.handleInputChange}
                  value={username}
                />

                <FieldGroup
                  id="formControlsPassword"
                  type="password"
                  label="Password"
                  name="password"
                  valid={null}
                  onChange={this.handleInputChange}
                  value={password}
                />

                <Button type="submit" disabled={isFetching}>Innskrá</Button>

              </form>

              <p><Link className="login__link" to="/register">Nýskráning</Link></p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
  }
}

export default connect(mapStateToProps)(Login);