import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Alert
} from 'reactstrap';
import { FieldGroup } from '../../utils/bs';
import Validation from '../../components/validation';
import ApplicationProcess from '../../components/application-process';

import api from '../../api';

import './NewApplication.css';

export default class NewApplication extends Component {
  state = {
    company: '',
    posName: '',
    process: [],
    date: '',
    loading: false,
    registered: false,
    errors: [],
  }

  finishState = finishedState => {
    this.setState({ process: finishedState });
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

    const { company, posName, process, date } = this.state;

    const post = await api.post('/applications', { company, posName, process, date });

    if (post.status >= 400) {
      const errors = post.result.errors || [];
      this.setState({ loading: false, errors });
    }
    
    if (post.status === 201) {
      this.setState({ loading: false, registered: true });
      setTimeout(() => this.setState({ registered: false }), 4000);
    }
  }

  render() {
    const {
      company,
      posName,
      loading,
      errors,
      registered,
      date
    } = this.state;

    return (
      <div className="register">
        {registered && (
          <Alert color="success">
            Tókst að vista umsókn í gagnagrunn
          </Alert>
        )}
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>Ný umsókn</h2>

              <Validation errors={errors} />

              <form onSubmit={this.handleSubmit}>
                <FieldGroup
                  id="formControlsCompany"
                  type="text"
                  label="Fyrirtæki"
                  name="company"
                  autoFocus
                  valid={errors.length === 0 ? null : errors.find(el => el.field === 'company') ? false : true}
                  onChange={this.handleInputChange}
                  value={company}
                />

                <FieldGroup
                  id="formControlsPosName"
                  type="text"
                  label="Stöðuheiti"
                  name="posName"
                  valid={errors.length === 0 ? null : errors.find(el => el.field === 'posName') ? false : true}
                  onChange={this.handleInputChange}
                  value={posName}
                />

                <FieldGroup
                  id="formControlsDate"
                  type="date"
                  label="Dagsetning"
                  name="date"
                  valid={errors.length === 0 ? null : errors.find(el => el.field === 'date') ? false : true}
                  onChange={this.handleInputChange}
                  value={date}
                />
                
                <FormGroup id="formControlsState">
                  <Label>Ferli</Label>
                  <ApplicationProcess finish={this.finishState} errors={errors} />
                </FormGroup>

                <Button type="submit" color="primary" disabled={loading}>Senda umsókn</Button>

              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}