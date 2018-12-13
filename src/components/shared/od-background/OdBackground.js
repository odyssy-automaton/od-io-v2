import React from 'react';
import './OdBackground.scss';
import OdBackgroundTop from '../../../img/odyssy__background--lines--top.svg';
import OdBackgroundRight from '../../../img/odyssy__background--lines--right.svg';
import OdBackgroundBottom from '../../../img/odyssy__background--lines--bottom.svg';
import OdBackgroundLeft from '../../../img/odyssy__background--lines--left.svg';

const OdBackground = class extends React.Component {
  render() {
    return (
      <div className="OdBackground">
        <img className="OdBackground--Top" src={OdBackgroundTop} alt="background graphic"/>
        <img className="OdBackground--Right" src={OdBackgroundRight} alt="background graphic" />
        <img className="OdBackground--Bottom" src={OdBackgroundBottom} alt="background graphic" />
        <img className="OdBackground--Left" src={OdBackgroundLeft} alt="background graphic" />
      </div>
    );
  }
};

export default OdBackground;
