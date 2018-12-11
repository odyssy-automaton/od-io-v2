import React from 'react';
import Layout from '../components/layout/Layout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Home</h1>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
