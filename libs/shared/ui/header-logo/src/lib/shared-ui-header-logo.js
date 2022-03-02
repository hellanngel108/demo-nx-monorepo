// libs
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {string} props.title
 * @returns {React.ReactElement}
 */

export const HeaderLogo = ({ title }) => {
  return (
    <div className="header-logo-wrapper">
      <div className="header-logo-wrapper-inner">
        <Link to="/" className="header-logo-link">
          <h1 className="header-logo-title"> {title} </h1>
        </Link>
      </div>
    </div>
  );
};
export default HeaderLogo;
