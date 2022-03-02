// libs
import React from 'react';
// shared libs
import { HeaderNavLink } from '@demo-org/shared/ui/header-navlink';
// style
import './style.scss';

const HeaderRoute = () => {
  return (
    <div className="header-route-wrapper">
      <div className="header-route-wrapper-inner">
        <HeaderNavLink path="/" label="Home" />
        <HeaderNavLink path="/all" label="Show All" />
      </div>
    </div>
  );
};

export default HeaderRoute;
