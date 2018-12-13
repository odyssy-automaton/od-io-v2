import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import '../../styles/Work.scss';
import workPlaceholder from '../../img/Native__Home--iphone.png';

export default class WorkPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    console.log(data);

    return (
      <Layout>
        <section className="PageHeader">
          <div className="PageHeader__Contents">
            <h1>Ideation. Design. Development. Product. Iteration.</h1>
          </div>
        </section>
        <section className="Filter">
          <div className="Filter__Contents">
            <p>
              Filter <span>All</span>
            </p>
          </div>
        </section>
        <section className="Page">
          <div className="Page__Contents">
            <div className="Work">
              {posts.map(({ node: post }) => (
                <Link
                  className="Work__Item"
                  key={post.id}
                  to={post.fields.slug}
                >
                  <img src={workPlaceholder} alt="featured" />
                  <p>{post.frontmatter.title}</p>
                  <p>{post.frontmatter.description}</p>
                  <p>Keep Reading →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(work-items)/" } }
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
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
