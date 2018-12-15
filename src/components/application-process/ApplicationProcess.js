import React, { Component } from 'react';

import {
  Card,
  CardBody,
  Button,
  ButtonGroup
} from 'reactstrap';

import './ApplicationProcess.scss';

class ApplicationProcess extends Component {

  state = {
    history: [],
    step: 'start',
    process: [],
    finished: false,
  };

  steps = {
    start: [
      { value: 'done', label: 'Bið athugun' },
      { value: 'vidtal', label: 'Viðtal' },
      { value: 'done', label: 'Neitun' }
    ],
    vidtal: [
      { value: 'done', label: 'Neitun' },
      { value: 'aVidtal', label: 'Annað viðtal' },
      { value: 'done', label: 'Boð í starf' },
    ],
    aVidtal: [
      { value: 'done', label: 'Neitun' },
      { value: 'done', label: 'Boð í starf' }
    ]
  };

  componentDidMount() {
    const { process } = this.props;
    if (process) {
      const history = ['start', 'vidtal', 'aVidtal'];
      const { length } = process;
      if (length < 3) history.splice(length);
      this.setState({ process, history, step: 'done', finished: true });
    }
  }

  finish = e => {
    const { finish, name } = this.props;
    const { process } = this.state;
    finish(process, name);
    this.setState({ finished: true });
  }

  redo = e => {
    this.setState({ finished: false });
  }

  next = e => {
    const { value, textContent } = e.target;
    const { step, process, history } = this.state;
    process.push(textContent);
    history.push(step);
    this.setState({ step: value, process, history });
  }

  previous = e => {
    const { process, history } = this.state;
    process.pop();
    const prev = history.pop();
    this.setState({ process, history, step: prev });
  }

  render () {
    const { step, process, finished } = this.state;
    const { errors = [] } = this.props;
    const options = this.steps[step];

    let validation = '';
    if (errors.length > 0) {
      if (errors.find(el => el.field === 'process')) {
        validation = 'error';
      } else {
        validation = 'success';
      }
    }

    return (
      <div className="application-process">
        <Card className={`history ${validation}`}>
          <CardBody>
            {process.length > 0 && process.map((stage, index) => (
              <React.Fragment key={index + stage}>
                <p>{stage}</p>
                {index !== process.length - 1 && (
                  <p>&#8594;</p>
                )}
              </React.Fragment>
            ))}
          </CardBody>
        </Card>
        {options && !finished && (
          <ButtonGroup className="process-options">
            {options.map(({ value, label }) => (
              <Button key={label} onClick={this.next} value={value}>{label}</Button>
            ))}
          </ButtonGroup>
        )}
        {step !== 'start' && !finished && (
          <div className="process-operation">
            <Button color="danger" onClick={this.previous}>Til baka</Button>
            <Button color="success" onClick={this.finish}>Klára</Button>
          </div>
        )}
        {finished && (
          <div className="process-operation">
            <Button color="warning" onClick={this.redo}>Breyta</Button>
          </div>
        )}
      </div>
    );
  }
}

export default ApplicationProcess;