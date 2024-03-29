import React, { Component } from 'react';

import './PatchLoading.scss';

class PatchLoading extends Component {

  state = { display: true };

  displayTimer = null;

  componentWillUnmount() {
    clearTimeout(this.displayTimer);
  }

  render() {
    const { display } = this.state;
    const { state = 'false' } = this.props;

    let loadClasses = 'circle-loader';
    let checkmarkClasses = 'checkmark error';

    switch (state) {
      case 'true':
        if (!display) this.setState({ display: true });
        clearTimeout(this.displayTimer);
        this.displayTimer = setTimeout(() => {
          this.setState({ display: false });
        }, 1000);
        break;
      case 'done':
        if (display) {
          loadClasses += ' load-complete';
          checkmarkClasses = checkmarkClasses.replace('error', ' draw checkmark-display');
        } else {
          return null;
        }
        break;
      case 'failed':
        clearTimeout(this.displayTimer);
        loadClasses += ' load-error';
        checkmarkClasses += ' checkmark-display';
        break;
      default:
        return null;
    }

    return (
      <div className={loadClasses}>
        <div className={checkmarkClasses} />
      </div>
    );
  }
}

export default PatchLoading;
