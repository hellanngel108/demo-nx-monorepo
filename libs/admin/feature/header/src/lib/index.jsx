// libs
import React from 'react';
// share libraries
import { HeaderLogo } from '@demo-org/shared/ui/header-logo';
// components
import HeaderRoute from './HeaderRoute';
// style
import './style.scss';

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper-inner">
        <HeaderLogo title="AdminSite" />
        <HeaderRoute />
      </div>
    </div>
  );
};
export default Header;
