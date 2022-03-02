// libs
import React from 'react';
import { navLinkRoutes } from '@demo-org/admin/feature/routes';
// shared libs
import { HeaderNavLink } from '@demo-org/shared/ui/header-navlink';
// style
import './style.scss';

const HeaderRoute = () => {
  return (
    <div className="header-route-wrapper">
      <div className="header-route-wrapper-inner">
        {navLinkRoutes.map((navLink) => {
          return (
            <HeaderNavLink
              key={navLink.label}
              path={navLink.path}
              label={navLink.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeaderRoute;
