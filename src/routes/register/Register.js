import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../api';

import Validation from '../../components/validation';
import { FieldGroup } from '../../utils/bs';
import { Container, Row, Col, Button } from 'reactstrap';

const basename = process.env.PUBLIC_URL;

class Register extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    loading: false,
    registered: false,
    errors: [],
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { username, password, name } = this.state;

    const post = await api.post('/register', { username, password, name });

    if (post.status >= 400) {
      const errors = post.result.errors || [];
      this.setState({ loading: false, errors });
    }

    if (post.status === 201) {
      this.setState({ loading: false, registered: true });
    }
  }

  render() {
    const { username, password, name, loading, errors, registered } = this.state;

    if (registered) {
      return (
        <div>
          <h2>Nýskráning tókst!</h2>
          <p><a href="/login">Innskráning</a></p>
        </div>
      );
    }

    return (
      <div className="register">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <h2>Nýskráning</h2>

              <Validation errors={errors} />

              <form onSubmit={this.handleSubmit}>
                <FieldGroup
                  id="formControlsUsername"
                  type="text"
                  label="Username"
                  name="username"
                  autoFocus
                  valid={errors.length === 0 ? null : errors.find(el => el.field === 'username') ? false : true}
                  onChange={this.handleInputChange}
                  value={username}
                />

                <FieldGroup
                  id="formControlsPassword"
                  type="password"
                  label="Password"
                  name="password"
                  valid={errors.length === 0 ? null : errors.find(el => el.field === 'password') ? false : true}
                  onChange={this.handleInputChange}
                  value={password}
                />

                <FieldGroup
                  id="formControlsPassword"
                  type="text"
                  label="Name"
                  name="name"
                  valid={errors.length === 0 ? null : errors.find(el => el.field === 'name') ? false : true}
                  onChange={this.handleInputChange}
                  value={name}
                />

                <Button type="submit" disabled={loading}>Nýskrá</Button>

              </form>

              <p><Link className="login__link" to={`${basename}/login`}>Innskráning</Link></p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps)(Register);