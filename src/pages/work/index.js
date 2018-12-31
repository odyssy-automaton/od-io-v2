import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';
import '../../styles/Work.scss';

export default class WorkPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="PageHeader">
          <div className="PageHeader__Contents">
            <p>Proof of Work</p>
            <h1>
              We build experiences in the form of Apps, Websites, Protocols &
              Prototyping for Enterprise, Open Source, and ourselves.
            </h1>
          </div>
          <OdBackground />
        </section>
        <section className="Filter">
          <div className="Filter__Contents">
            <p>
              Filter <span>All</span>
            </p>
          </div>
        </section>
        <div className="Work">
          {posts.map(({ node: post }) => (
            <Link className="Work__Item" key={post.id} to={post.fields.slug}>
              <div className="Work__Item--Image">
                <img
                  src={
                    post.frontmatter.featuredImage.childImageSharp.original.src
                  }
                  alt="featured"
                />
              </div>
              <p className="Weight--100">
                <span className="Weight--500">{post.frontmatter.title}</span>{' '}
                {post.frontmatter.shortDescription}
              </p>
              <p>Keep Reading →</p>
            </Link>
          ))}
        </div>
      </Layout>
    );
  }
}

WorkPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___sortOrder] }
      filter: { frontmatter: { templateKey: { eq: "work-item" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            shortDescription
            templateKey
            featuredImage {
              id
              childImageSharp {
                id
                resize {
                  src
                  tracedSVG
                  width
                  height
                  aspectRatio
                  originalName
                }
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
