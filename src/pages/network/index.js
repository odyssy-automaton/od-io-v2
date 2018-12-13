import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';

export default class NetworkPage extends Component {
  render() {
    return (
      <Layout>
      <section className="PageHeader">
        <div className="PageHeader__Contents">
          <h1>Odyssy is more like a super organism, a network of autonomous cells distributing value across its network and projects.</h1>
        </div>
        <OdBackground />
      </section>
      <section className="Page">
        <div className="Page__Contents">
        </div>
      </section>
      </Layout>
    );
  }
}
