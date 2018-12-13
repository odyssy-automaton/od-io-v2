import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Content, { HTMLContent } from '../components/shared/Content';

export const WorkItemTemplate = ({
  content,
  contentComponent,
  description,
  sections,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      {helmet || ''}
      <section className="PageHeader">
        <div className="PageHeader__Contents">
          <p>
            <Link to="/work">Proof of Work</Link> / {title}
          </p>
          <h1>{description}</h1>
        </div>
      </section>
      <section className="Block">
        <div className="Block__Contents">Long Description</div>
        <p>{description}</p>
      </section>
      <section className="Page">
        <div className="Page__Contents">
          <PostContent content={content} />
          {sections && sections.length ? (
            <div>
              <h4>Sections</h4>
              {sections.map((section) => {
                return (
                  <h5 key={section.node.id}>
                    {section.node.frontmatter.title}
                  </h5>
                );
              })}
            </div>
          ) : null}
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

WorkItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const WorkItem = ({ data }) => {
  const post = data.item;
  const sections = data.sections || [];

  return (
    <Layout>
      <WorkItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        sections={sections.edges}
        helmet={
          <Helmet titleTemplate="%s | Proof of Work">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

WorkItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default WorkItem;

export const pageQuery = graphql`
  query WorkItemByID($id: String, $slug: String) {
    item: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
    sections: allMarkdownRemark(
      filter: { frontmatter: { workItem: { eq: $slug } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
