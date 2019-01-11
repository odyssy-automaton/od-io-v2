import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import '../../styles/global.scss';
import '../../styles/base.scss';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <meta
            name="google-site-verification"
            content="DZfMtMsCQxPUy-5UuAMvJEH8y2QyqB9Em2YvoJoAyP0"
          />

          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="Software Development" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="https://odyssy.io/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
);

export default TemplateWrapper;
