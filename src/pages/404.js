import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className="PageHeader">
      <div className="PageHeader__Contents">
        <p>Not Found</p>
        <h1>Whoops. That's not a real page.</h1>
        <Link to="/">Take me home</Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
