/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import OdBackground from '../components/shared/od-background/OdBackground';
import WorkSection from '../components/work/WorkSection';
import WorkServices from '../components/work/WorkServices';
import { HTMLContent } from '../components/shared/Content';
import Icon from '../components/shared/icons/Icon';

import '../styles/WorkItem.scss';

export const WorkItemTemplate = ({ workItem, sections, helmet }) => {
  const hasServices = workItem.servicesList1 && workItem.servicesList1.length;

  console.log('work-item.js');
  console.log(workItem);

  return (
    <div className={'WorkItem ' + workItem.className}>
      {helmet || ''}
      <section className="PageHeader">
        <div className="PageHeader__Contents">
          <h4>
            <Link to="/work">
              <span className="Hover--Back">
                <Icon name="arrow-back" />
              </span>{' '}
              Proof of Work
            </Link>{' '}
            / {workItem.title}
          </h4>
          <h1>
            <span className="Weight--400">{workItem.title}</span>{' '}
            {workItem.shortDescription}
          </h1>
        </div>
        <OdBackground />
      </section>
      <section className="Block">
        <div className="Block__Contents">
          <div className="Columns">
            <div className="Columns__Column--50">
              <HTMLContent content={workItem.longDescription} />
              {workItem.linkUrl !== '' && (
                <div className="WorkLink">
                  <a
                    href={workItem.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {workItem.linkText}
                  </a>
                </div>
              )}
            </div>
            <div className="Columns__Column--50">
              <img src={workItem.projectImage.childImageSharp.original.src} />
            </div>
          </div>
        </div>
      </section>
      <section className="Page">
        <div className="Page__Contents">
          {sections && sections.length ? (
            <div className="WorkSections">
              {sections.map((section) => {
                return (
                  <WorkSection content={section.node} key={section.node.id} />
                );
              })}
            </div>
          ) : null}
        </div>
      </section>
      <section className="Block Background--Dark">
        <div className="Block__Contents">
          {hasServices ? (
            <div className="Services">
              <WorkServices workItem={workItem} />
            </div>
          ) : null}
          <div className="BackToWork">
            <p className="Extra-Large">
              <Link to="/work">
                <Icon name="arrow-back" /> Back to Proof of Work
              </Link>
            </p>
          </div>
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
  workItem.frontmatter.longDescription = data.item.html;
  const sections = data.sections || [];

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
              content={`${workItem.frontmatter.shortDescription}`}
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
        title
        shortDescription
        linkUrl
        linkText
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
        projectImage {
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
        tags
        className
        servicesList1Title
        servicesList1
        servicesList2Title
        servicesList2
        servicesList3Title
        servicesList3
      }
      html
    }
    sections: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___sortOrder] }
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
