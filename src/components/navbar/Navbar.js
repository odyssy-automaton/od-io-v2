import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';
import './Hamburger.scss';
import OdyssyLogoStandard from '../../img/odyssy__logo--standard.svg';

const Navbar = class extends React.Component {
  state = {
      navOpen: false,
    }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }

  render() {

    const mobileNavClass = this.state.navOpen ?
      'Navbar__Mobile Navbar__Mobile--Open' : 'Navbar__Mobile';

    const hamburgerClass = this.state.navOpen ?
      'navbar__hamburger hamburger hamburger--spin is-active' : 'navbar__hamburger hamburger hamburger--spin';

    return (
      <nav
        className="Navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="Navbar__Brand">
          <Link to="/" className="Navbar__Brand--Logo" title="Logo">
            <img alt="Odyssy Logo" src={OdyssyLogoStandard} />
          </Link>
        </div>
        <div className="Navbar__Desktop">
          <Link activeClassName="Navbar__Desktop--Item--Active" className="Navbar__Desktop--Item" to="/work">
            Work
          </Link>
          <Link activeClassName="Navbar__Desktop--Item--Active" className="Navbar__Desktop--Item" to="/services">
            Services
          </Link>
          <Link activeClassName="Navbar__Desktop--Item--Active" className="Navbar__Desktop--Item" to="/network">
            Network
          </Link>
        </div>
        {/* Start Hamburger */}
        <button className={hamburgerClass} type="button" onClick={this.toggleNav}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={mobileNavClass}>
          <div className="Navbar__Mobile--Contents">
            <Link className="Navbar__Mobile--Contents--Item" to="/work">
              Work
            </Link>
            <Link className="Navbar__Mobile--Contents--Item" to="/services">
              Services
            </Link>
            <Link className="Navbar__Mobile--Contents--Item" to="/network">
              Network
            </Link>
          </div>
        </div>
        {/* End Hamburger */}
      </nav>
    );
  }
};

export default Navbar;
