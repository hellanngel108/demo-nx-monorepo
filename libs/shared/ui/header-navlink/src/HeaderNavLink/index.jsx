// libs
import React from 'react';
import { Link } from 'react-router-dom';
// style
import './style.scss';

/**
 * @param {Object} props
 * @param {string} props.path
 * @param {sring} props.label
 * @returns {React.ReactElement}
 */

export const HeaderNavLink = ({ path, label }) => (
  <div className="navbar-link-wrapper">
    <Link to={path}>{label}</Link>
  </div>
);

export default HeaderNavLink;
