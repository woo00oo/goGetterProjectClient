import React from 'react';
import { Fixed, Inner } from '@layouts/Header/Navbar/styles';
import LeftMenu from '@layouts/Header/Navbar/LeftMenu';
import RightMenu from '@layouts/Header/Navbar/RightMenu';

const Navbar = () => {
  return (
    <Fixed>
      <Inner>
        <LeftMenu />
        <RightMenu />
      </Inner>
    </Fixed>
  );
};

export default Navbar;
