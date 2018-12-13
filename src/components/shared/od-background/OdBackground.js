import React from 'react';
import Fade from 'react-reveal/Fade';
import './OdBackground.scss';
import OdBackgroundTop from '../../../img/odyssy__background--lines--top.svg';
import OdBackgroundRight from '../../../img/odyssy__background--lines--right.svg';
import OdBackgroundBottom from '../../../img/odyssy__background--lines--bottom.svg';
import OdBackgroundLeft from '../../../img/odyssy__background--lines--left.svg';

const OdBackground = class extends React.Component {
  render() {
    return (
      <div className="OdBackground">
        <Fade down>
        <img className="OdBackground--Top" src={OdBackgroundTop} alt="background graphic"/>
        </Fade>

        <div className="OdBackground--Right">
        <Fade right>
        <img src={OdBackgroundRight} alt="background graphic" />
        </Fade>
        </div>

        <Fade up>
        <img className="OdBackground--Bottom" src={OdBackgroundBottom} alt="background graphic" />
        </Fade>

        <div className="OdBackground--Left">
        <Fade left>
        <img src={OdBackgroundLeft} alt="background graphic" />
        </Fade>
        </div>

      </div>


    );
  }
};

export default OdBackground;
