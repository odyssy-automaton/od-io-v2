import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
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
          <Fade>
          <div className="PageHeader__Contents">
            <h4>Proof of Work</h4>
            <h1>
              We design & build at the forefront of human experience innovation.
            </h1>
          </div>
          </Fade>
          <OdBackground />
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
