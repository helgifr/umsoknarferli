import React, { Component } from 'react';

import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div id="circle">
        <div className="loader">
          <div className="loader">
              <div className="loader">
                <div className="loader">
                </div>
              </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default Loading;