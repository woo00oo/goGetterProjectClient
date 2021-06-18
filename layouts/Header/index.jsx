import React from 'react';
import { Head, HeaderTop } from '@layouts/Header/styles';
import Navbar from '@layouts/Header/Navbar';

const Header = () => {
  return (
    <Head>
      <HeaderTop>Header</HeaderTop>
      <Navbar />
    </Head>
  );
};

export default Header;
