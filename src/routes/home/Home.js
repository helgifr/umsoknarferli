import React, { Component } from 'react';

import Markdown from 'react-markdown';

import './Home.scss';

import homeText from './homeText.md';

class Home extends Component {

  state = { terms: null }

  async componentDidMount() {
    const result = await fetch(homeText);
    const terms = await result.text();
    this.setState({ terms });
  }

  render() {
    const { terms } = this.state;
    return (
      <div className="home">
        <Markdown source={terms} />
      </div>
    );
  }
}

export default Home;