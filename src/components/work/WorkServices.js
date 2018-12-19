import React from 'react';

const WorkServices = class extends React.Component {
  render() {
    const { workItem } = this.props;

    return (
      <div className="Columns">
        <div className="Columns__Column--33">
          <p className="Weight--500">{workItem.servicesList1Title}</p>
          <ul>
            {workItem.servicesList1.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        {workItem.servicesList2 && workItem.servicesList2.length ? (
          <div className="Columns__Column--33">
            <p className="Weight--500">{workItem.servicesList2Title}</p>
            <ul>
              {workItem.servicesList2.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {workItem.servicesList3 && workItem.servicesList3.length ? (
          <div className="Columns__Column--33">
            <p className="Weight--500">{workItem.servicesList3Title}</p>
            <ul>
              {workItem.servicesList3.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
};

export default WorkServices;
