import React from 'react';
import { Fixed, Inner } from '@layouts/Header/Navbar/styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fixed>
      <Inner>
        <ul>
          <li>
            <Link to="/">독서 기록</Link>
          </li>
          <li>
            <Link to="/">독서 공유</Link>
          </li>
          <li>
            <Link to="/discussion">독서 토론</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </Inner>
    </Fixed>
  );
};

export default Navbar;
