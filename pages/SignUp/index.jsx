<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import Header from '@layouts/Header';
import {
  SignUpWrapper,
  SignForm,
  FormGroup,
  Label,
  EmailInput,
  TextInput,
  SmallText,
  FormCheck,
  CheckText,
  SignUpButton,
  AuthButton,
} from '@pages/SignUp/styles';
import authModal from '../Modal/authModal';

const SignUp = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div id="container">
      <Header />
      <SignUpWrapper>
        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>회원가입</div>
        <SignForm>
          <FormGroup>
            <Label>
              이메일<span style={{ color: 'blue' }}> *</span>
            </Label>
            <br></br>
            <EmailInput placeholder="이메일을 입력해주세요." type="email"></EmailInput>
            <AuthButton onClick={openModal}>인증받기</AuthButton>
            <authModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </FormGroup>
          <FormGroup>
            <Label>
              비밀번호<span style={{ color: 'blue' }}> *</span>
            </Label>
            <br></br>
            <TextInput placeholder="비밀번호를 입력해주세요." type="password"></TextInput>
            <SmallText>비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다.</SmallText>
          </FormGroup>
          <FormGroup>
            <Label>
              비밀번호 확인<span style={{ color: 'blue' }}> *</span>
            </Label>
            <br></br>
            <TextInput placeholder="비밀번호를 다시 입력해주세요." type="password"></TextInput>
          </FormGroup>
          <FormGroup>
            <Label>
              이름<span style={{ color: 'blue' }}> *</span>
            </Label>
            <br></br>
            <TextInput placeholder="이름을 입력해주세요." type="text"></TextInput>
          </FormGroup>
          <FormGroup>
            <Label>
              휴대폰 번호<span style={{ color: 'blue' }}> *</span>
            </Label>
            <br></br>
            <TextInput placeholder="-없이 번호를 입력해주세요." type="text"></TextInput>
          </FormGroup>
          <FormGroup>
            <Label>
              닉네임<span style={{ color: 'blue' }}> *</span>
            </Label>
            <br></br>
            <TextInput placeholder="닉네임을 입력해주세요." type="text"></TextInput>
          </FormGroup>
          <FormCheck>
            <input type="checkbox"></input>
            <CheckText>
              우도독의 <span style={{ textDecoration: 'underline' }}>이용약관 및 개인정보 처리 방침</span>(필수),
              <span style={{ textDecoration: 'underline' }}>마케팅 정보 수신</span>(선택)에 동의합니다.
            </CheckText>
          </FormCheck>
          <SignUpButton>회원가입</SignUpButton>
        </SignForm>
      </SignUpWrapper>
>>>>>>> 002a13907890fe99fae84e744072c86fa626455d
    </div>
  );
};

export default SignUp;
