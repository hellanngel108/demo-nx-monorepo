// libs
import React from 'react';
// shared library
import { HeaderLogo } from '@demo-org/shared/ui/header-logo';
// components
import HeaderRoute from './HeaderRoute';
//style
import './style.scss';

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-inner">
        <HeaderLogo title="ClientSite" />
        <HeaderRoute />
      </div>
    </div>
  );
};
export default Header;
