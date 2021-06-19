import React from 'react';
import Header from '@layouts/Header';
import { LoginDiv, Form, Login, Input, Button, Search, Social, FaceBook, Google } from '@pages/LogIn/styles';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div id="container">
      <Header />
      <LoginDiv>
        <Login>
          <h2>로그인</h2>
          <Form>
            <span>
              <Link to="/signup">우도독 가입하기</Link>
            </span>
            <div id="email">
              <Input type="email" id="email" name="email" placeholder="이메일" />
            </div>
            <div id="password">
              <Input type="password" id="password" name="password" placeholder="비밀번호" />
            </div>
            <Button type="submit">로그인</Button>
          </Form>
        </Login>
        <Search>
          <span>
            <Link to="/">아이디 찾기</Link>|<Link to="/">비밀번호 찾기</Link>
          </span>
        </Search>
        <Social>
          <FaceBook>
            <i class="fab fa-facebook-square"></i> 페이스북으로 시작하기
          </FaceBook>
          <Google>
            <i class="fab fa-google"></i> 구글로 시작하기
          </Google>
        </Social>
      </LoginDiv>
    </div>
  );
};

export default LogIn;
