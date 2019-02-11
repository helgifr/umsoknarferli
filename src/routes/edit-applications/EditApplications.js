import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import { Link } from 'react-router-dom';

import api from '../../api';

import Loading from '../../components/loading';
import PatchLoading from '../../components/patch-loading';
import ApplicationProcess from '../../components/application-process';

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import TextAreaAutosize from 'react-autosize-textarea';

import 'moment/locale/is';

import 'react-day-picker/lib/style.css'
import './EditApplications.scss';

const basename = process.env.PUBLIC_URL;

class EditApplications extends Component {

  state = { loading: true, deleteApplication: null };

  componentDidMount() {
    this.fetchApplications();
  }

  async fetchApplications() {
    const url = '/applications';
    try {
      const { result: applications } = await api.get(url);
      const patching = applications.map(() => ({ state: 'false', timeOut: null }));
      this.setState({ loading: false, applications, patching });
    } catch (err) {
      console.error('Error fetching applications', err);
      this.setState({ error: true, loading: false });
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    if (name) {
      const [index, key] = name.split('.');
      const { applications } = this.state;
      this.setState({
        applications: update(applications, { [index]: { [key]: { $set: value } } })
      });
    }
  }

  handleEnter = e => {
    /*
    if (e.key === 'Enter') {
      e.preventDefault();
      const { name, value } = e.target;
      const [index, key] = name.split('.');
      this.patch(index, { [key]: value });
    }*/
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = e.target;
    const { applications } = this.state;
    this.patch(id, applications[id]);
  }

  handleDayChange = async (selectedDay, modifiers, dayPickerInput) => {
    const { name } = dayPickerInput.props;
    const [index, key] = name.split('.');
    const formattedDate = formatDate(selectedDay, 'YYYY-MM-DD');
    const { applications } = this.state;
    this.setState({
      applications: update(applications, { [index]: { [key]: { $set: formattedDate } } })
    });
    this.patch(index, { date: formattedDate });
  }

  patch = async (index, data) => {
    const url = `/applications/${index}`;
    try {
      const { patching } = this.state;
      patching[index] = 'true';
      this.setState({ patching });

      const result = await api.patch(url, data);

      if (result.status >= 400) {
        patching[index] = 'failed';
      } else {
        patching[index] = 'done';
      }
      this.setState({ patching });

    } catch (err) {
      console.error('Error patching applications', err);
      this.setState({ error: true });
    }
  }

  deleteClick = index => {
    this.setState({ deleteApplication: index });
  }

  deleteConfirm = async () => {
    const { deleteApplication: index } = this.state;
    const url = `/applications/${index}`;
    try {
      const result = await api.delete(url);
      if (result.status === 204) {
        const { applications } = this.state;
        applications.splice(index, 1);
        this.setState({ applications });
      }
    } catch (err) {
      console.error('Error patching applications', err);
      this.setState({ error: true });
    } finally {
      this.setState({ deleteApplication: null });
    }
  }

  deleteCancel = () => {
    this.setState({ deleteApplication: null });
  }

  finishProcess = (process, name) => {
    const [index, key] = name.split('.');
    const { applications } = this.state;
    this.setState({
      applications: update(applications, { [index]: { [key]: { $set: process } } })
    });
    this.patch(index, { process });
  }

  render() {
    const {
      applications,
      loading,
      error,
      deleteApplication,
      patching
    } = this.state;

    if (loading) return (<Loading />);

    if (error) return (<h1>An error occurred</h1>);

    if (!applications || applications.length === 0) {
      return (
        <div className="no-applications">
          <h2>Engar umsóknir í gagnagrunni</h2>
          <h3>Til að nota töflu þarf að vera með a.m.k eina umsókn í gagnagrunni</h3>
          <Link to={`${basename}/new`}>
            <Button color="primary" size="lg">
              Ný umsókn
            </Button>
          </Link>
        </div>
      );
    }

    const sortedApplications = applications
      .map((application, index) => ({ application, index }));
    sortedApplications
      .sort(({ application: a }, { application: b }) => Date.parse(b.date) - Date.parse(a.date));

    return (
      <Container className="applications-page">
        <Modal isOpen={Number.isInteger(deleteApplication) ? true : false} toggle={this.deleteConfirm}>
          <ModalHeader toggle={this.deleteCancel}>Eyða umsókn</ModalHeader>
          <ModalBody>
            Ertu viss um að þú viljir eyða umsókninni?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteConfirm}>Staðfesta</Button>
            <Button onClick={this.deleteCancel}>Hætta við</Button>
          </ModalFooter>
        </Modal>
        <Row>
          {sortedApplications.map(({ index, application }) => (
            <Col key={index} className="application-col" md={12} lg={6} xl={4}>
              <form id={index} onSubmit={this.handleSubmit}>
                <Card className="application-section">
                  <CardHeader>
                    <h4>
                      <Input
                        type="text"
                        name={`${index}.company`}
                        value={application.company}
                        onKeyPress={this.handleEnter}
                        onChange={this.handleInputChange}
                      />
                    </h4>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs={6}>
                        <TextAreaAutosize
                          name={`${index}.posName`}
                          className="form-control"
                          value={application.posName}
                          onKeyPress={this.handleEnter}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col xs={6}>
                        <DayPickerInput
                          name={`${index}.date`}
                          value={formatDate(application.date, 'll', 'is')}
                          formatDate={formatDate}
                          parseDate={parseDate}
                          format="ll"
                          onDayChange={this.handleDayChange}
                          dayPickerProps={{
                            localeUtils: MomentLocaleUtils,
                            locale: 'is'
                          }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter onClick={this.processClick}>
                    <ApplicationProcess
                      name={`${index}.process`}
                      process={application.process}
                      finish={this.finishProcess}
                    />
                  </CardFooter>
                  <span tabIndex="0" name={`${index}.delete`} className="delete" onClick={() => this.deleteClick(index)} />
                </Card>
                <button type="submit" />
              </form>
              <PatchLoading state={patching[index]} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(EditApplications);