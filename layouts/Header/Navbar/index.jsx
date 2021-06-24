import React, { useState } from 'react';
import { Fixed, Inner, LinkClicked } from '@layouts/Header/Navbar/styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const pathname = window.location.pathname;
  return (
    <Fixed>
      <Inner>
        <ul>
          <li>
            <Link to="/mybookrecord">
              <LinkClicked isActive={pathname.includes('/mybookrecord')}>독서 기록</LinkClicked>
            </Link>
          </li>
          <li>
            <Link to="/">독서 공유</Link>
          </li>
          <li>
            <Link to="/discussion">
              <LinkClicked isActive={pathname.includes('/discussion')}>독서 토론</LinkClicked>
            </Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <Link to="/login">
              <LinkClicked isActive={pathname.includes('/login')}>로그인</LinkClicked>
            </Link>
          </li>
        </ul>
      </Inner>
    </Fixed>
  );
};

export default Navbar;
