import React from 'react';
import PropTypes from 'prop-types';
import { WorkTemplate } from '../../templates/work-item';

const WorkPreview = ({ entry, widgetFor }) => (
  <WorkTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

WorkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkPreview;
