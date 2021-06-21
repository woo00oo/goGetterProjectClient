import React from 'react';
import { Head, HeaderTop } from '@layouts/Header/styles';
import Navbar from '@layouts/Header/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Head>
      <HeaderTop>
        <Link to="/">우도독</Link>
      </HeaderTop>
      <Navbar />
    </Head>
  );
};

export default Header;
