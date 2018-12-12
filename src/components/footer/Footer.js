import React from 'react';
import { Link } from 'gatsby';
import './Footer.scss';
import OdyssyLogoStandard from '../../img/odyssy__logo--standard.svg';

const Footer = class extends React.Component {

  render() {

    return (
      <div className="Footer">
        <div className="Footer__Brand">
          <Link to="/" className="Footer__Brand--Logo" title="Logo">
            <img alt="Odyssy Logo" src={OdyssyLogoStandard} />
          </Link>
        </div>
        <nav className="Footer__Nav">
          <Link activeClassName="Footer__Nav--Item--Active" className="Footer__Nav--Item" to="/work">
            Work
          </Link>
          <Link activeClassName="Footer__Nav--Item--Active" className="Footer__Nav--Item" to="/services">
            Services
          </Link>
          <Link activeClassName="Footer__Nav--Item--Active" className="Footer__Nav--Item" to="/network">
            Network
          </Link>
        </nav>
      </div>
    );
  }
};

export default Footer;
