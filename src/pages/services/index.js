import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';

export default class ServicesPage extends Component {
  render() {
    return (
      <Layout>
        <section className="PageHeader">
          <div className="PageHeader__Contents">
            <h1>The recipe for success calls for equal parts Design, Engineering, and Strategy. Add some Blockchain for spice.</h1>
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
