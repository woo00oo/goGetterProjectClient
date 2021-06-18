import React from 'react';
import { Right } from '@layouts/Header/Navbar/RightMenu/styles';
import { Link } from 'react-router-dom';

const RightMenu = () => {
  return (
    <div id="rightmenu">
      <Right>
        <span>
          <Link to="/">로그인</Link>
        </span>
        <i class="fas fa-search"></i>
        <input type="text" />
      </Right>
    </div>
  );
};

export default RightMenu;
