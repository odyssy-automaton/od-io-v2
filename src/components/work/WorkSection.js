import React from 'react';
import { HTMLContent } from '../shared/Content';

import '../../styles/work-sections/all.scss';

const WorkSection = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <h4 className="Weight--500">{content.frontmatter.title}</h4>
        <HTMLContent
          content={content.html}
          className={content.frontmatter.className}
        />
      </div>
    );
  }
};

export default WorkSection;
