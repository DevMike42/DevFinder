import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {

  return (
    <nav className="navbar bg-primary">
      <h1><i className={icon}></i>  {title}</h1>
    </nav>
  )
};

// Provides default props for component if not passed from parent
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

// Validate that props passed to component are correct data type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
