import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';
import OdyssyLogoStandard from '../../img/odyssy__logo--standard.svg';

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0,
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
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
        <div className="Navbar__Menu">
          <Link className="Navbar__Menu--Item" to="/work">
            Work
          </Link>
          <Link className="Navbar__Menu--Item" to="/services">
            Services
          </Link>
          <Link className="Navbar__Menu--Item" to="/network">
            Network
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
