import React from 'react';
import { Link } from 'gatsby';
import './Footer.scss';
import Icon from '../../components/shared/icons/Icon'
import OdyssyLogoStandard from '../../img/odyssy__logo--standard.svg';

const Footer = class extends React.Component {

  render() {

    return (
      <div className="Footer">
        <div className="Footer__Brand">
          <Link to="/" className="Footer__Brand--Logo" title="Logo">
            <img alt="Odyssy Logo" src={OdyssyLogoStandard} />
          </Link>
          <p>© 2019 Odyssy. All Rights Reserved.</p>
        </div>
        <nav className="Footer__Nav">
          <Link activeClassName="Footer__Nav--Item--Active" className="Footer__Nav--Item" to="/">
            Home
          </Link>
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
        <div className="Row Footer__Socials">
          <a href="https://medium.com/odyssy" className="Footer__Socials--Item" title="Medium"><Icon name="medium" fill="#333" /></a>
          <a href="https://github.com/odyssy-automaton" className="Footer__Socials--Item" title="Github"><Icon name="github" fill="#333"/></a>
          <a href="https://peepeth.com/odyssy" title="Peepeth" className="Footer__Socials--Item"><Icon name="peepeth" fill="#333"/></a>
          <a href="https://www.linkedin.com/company/odyssy/about/" className="Footer__Socials--Item" title="LinkedIn"><Icon name="linkedin" fill="#333"/></a>
        </div>
      </div>
    );
  }
};

export default Footer;
