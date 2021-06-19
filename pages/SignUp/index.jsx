import React from 'react';
import Header from '@layouts/Header';
import { LoginDiv, GoLogIn, Form, Login, Input, Button, Search, Social, FaceBook, Google } from '@pages/SignUp/styles';
import { Link, Redirect } from 'react-router-dom';

const SignUp = () => {
  return (
    <div id="container">
      <Header />
      <LoginDiv>
        <Login>
          <h2>회원가입</h2>
          <Social>
            <FaceBook>
              <i class="fab fa-facebook-square"></i> 페이스북으로 회원가입
            </FaceBook>
            <Google>
              <i class="fab fa-google"></i> 구글로 회원가입
            </Google>
          </Social>
          <Link to="/signup2">
            <Button>이메일로 회원가입</Button>
          </Link>
          <GoLogIn>
            <span>이미 우도독 회원이신가요?</span>
            <span>
              <Link to="/login">로그인하기</Link>
            </span>
          </GoLogIn>
        </Login>
      </LoginDiv>
    </div>
  );
};

export default SignUp;
