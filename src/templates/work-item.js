import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import OdBackground from '../components/shared/od-background/OdBackground';
import WorkSection from '../components/work-section/WorkSection';

export const WorkItemTemplate = ({ workItem, sections, tags, helmet }) => {
  return (
    <div className={workItem.className}>
      {helmet || ''}
      <section className="PageHeader">
        <div className="PageHeader__Contents">
          <p>
            <Link to="/work">Proof of Work</Link> / {workItem.title}
          </p>
          <h1>{workItem.shortDescription}</h1>
        </div>
        <OdBackground />
      </section>
      <section className="Block">
        <div className="Block__Contents">
          <p>{workItem.longDescription}</p>
        </div>
      </section>
      <section className="Page">
        <div className="Page__Contents">
          {sections && sections.length ? (
            <div>
              <h4>Sections</h4>
              {sections.map((section) => {
                return (
                  <WorkSection content={section.node} key={section.node.id} />
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
  workItem: PropTypes.object,
  helmet: PropTypes.object,
};

const WorkItem = ({ data }) => {
  const workItem = data.item;
  const sections = data.sections || [];

  console.log(data);

  return (
    <Layout>
      <WorkItemTemplate
        workItem={workItem.frontmatter}
        sections={sections.edges}
        helmet={
          <Helmet titleTemplate="%s | Proof of Work">
            <title>{`${workItem.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${workItem.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={workItem.frontmatter.tags}
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
  query WorkItemByID($id: String, $title: String) {
    item: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        shortDescription
        longDescription
        tags
        className
      }
    }
    sections: allMarkdownRemark(
      filter: { frontmatter: { relatedWorkItem: { eq: $title } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            className
          }
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
