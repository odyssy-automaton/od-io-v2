import React from 'react';
import { HTMLContent } from '../shared/Content';

const WorkSection = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <h4>{content.frontmatter.title}</h4>
        <HTMLContent content={content.html} className="poopin" />
      </div>
    );
  }
};

export default WorkSection;
