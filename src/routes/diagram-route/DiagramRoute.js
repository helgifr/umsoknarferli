import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../api';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Diagram from '../../components/diagram';

import Loading from '../../components/loading';

import './DiagramRoute.css';

const basename = process.env.PUBLIC_URL;

class DiagramRoute extends Component {

  state = { loading: true };

  componentDidMount() {
    this.fetchApplications();
  }

  async fetchApplications() {
    const url = '/applications';

    try {
      const { result: applications } = await api.get(url);
      this.setState({ loading: false, applications });
    } catch (err) {
      console.error('Error fetching applications', err);
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { applications, loading, error } = this.state;

    if (loading) return (<Loading />);

    if (error) return (<h1>An error occurred</h1>);

    return (
      <div className="diagram">
        {applications && applications.length > 0 &&
          <Diagram data={applications} />
        }
        {(!applications || applications.length === 0) && (
          <div className="no-applications">
            <h2>Engar umsóknir í gagnagrunni</h2>
            <h3>Til að nota töflu þarf að vera með a.m.k eina umsókn í gagnagrunni</h3>
            <Link to={`${basename}/new`}>
              <Button color="primary" size="lg">
                Ný umsókn
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(DiagramRoute);