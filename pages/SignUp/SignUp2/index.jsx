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
  Email,
  SignUpTitle,
} from '@pages/SignUp/SignUp2/styles';
import Footer from '@layouts/Footer';
import AuthModal from '@components/Modal/AuthModal';
import ServiceModal from '@components/Modal/ServiceModal';

const SignUp2 = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  return (
    <>
      <AuthModal authModalOpen={authModalOpen} setAuthModalOpen={setAuthModalOpen} />
      <ServiceModal serviceModalOpen={serviceModalOpen} setServiceModalOpen={setServiceModalOpen} />
      <div id="container">
        <Header />
        <SignUpWrapper>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignForm>
            <FormGroup>
              <Email>
                <Label>
                  이메일<span> *</span>
                </Label>
                <br></br>
                <EmailInput placeholder="이메일을 입력해주세요." type="email"></EmailInput>
                <AuthButton
                  onClick={(e) => {
                    setAuthModalOpen(true);
                    e.preventDefault();
                  }}
                >
                  인증받기
                </AuthButton>
              </Email>
            </FormGroup>
            <FormGroup>
              <Label>
                비밀번호<span> *</span>
              </Label>
              <br></br>
              <TextInput placeholder="비밀번호를 입력해주세요." type="password"></TextInput>
              <SmallText>비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다.</SmallText>
            </FormGroup>
            <FormGroup>
              <Label>
                비밀번호 확인<span> *</span>
              </Label>
              <br></br>
              <TextInput placeholder="비밀번호를 다시 입력해주세요." type="password"></TextInput>
            </FormGroup>
            <FormGroup>
              <Label>
                이름<span> *</span>
              </Label>
              <br></br>
              <TextInput placeholder="이름을 입력해주세요." type="text"></TextInput>
            </FormGroup>
            <FormGroup>
              <Label>
                휴대폰 번호<span> *</span>
              </Label>
              <br></br>
              <TextInput placeholder="-없이 번호를 입력해주세요." type="text"></TextInput>
            </FormGroup>
            <FormGroup>
              <Label>
                닉네임<span> *</span>
              </Label>
              <br></br>
              <TextInput placeholder="닉네임을 입력해주세요." type="text"></TextInput>
            </FormGroup>
            <FormCheck>
              <div>
                <input type="checkbox"></input>
                <CheckText>
                  우도독의{' '}
                  <a
                    onClick={(e) => {
                      setServiceModalOpen(true);
                      e.preventDefault();
                    }}
                  >
                    이용약관 및 개인정보 처리 방침
                  </a>
                  (필수)에 동의합니다.<br></br>
                </CheckText>
                <input type="checkbox"></input>
                <CheckText>
                  <a
                    onClick={(e) => {
                      setServiceModalOpen(true);
                      e.preventDefault();
                    }}
                  >
                    마케팅 정보 수신
                  </a>
                  (선택)에 동의합니다.
                </CheckText>
              </div>
            </FormCheck>
            <SignUpButton>회원가입</SignUpButton>
          </SignForm>
        </SignUpWrapper>
        <Footer></Footer>
      </div>
    </>
  );
};

export default SignUp2;
