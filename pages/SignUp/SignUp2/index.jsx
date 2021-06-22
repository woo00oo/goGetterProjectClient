import React, { useState, useCallback } from 'react';
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
  SignUpDiv,
  Error,
} from '@pages/SignUp/SignUp2/styles';
import Footer from '@layouts/Footer';
import AuthModal from '@components/Modal/Auth';
import ServiceModal from '@components/Modal/Service';

const SignUp2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nickName, setNickName] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const onChangeEmail = useCallback(
    (e) => {
      e.preventDefault();
      setEmail(e.target.value);
    },
    [email],
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onClickAuthButton = useCallback(
    (e) => {
      e.preventDefault();
      setAuthModalOpen(true);
    },
    [email],
  );

  const onClickServiceButton = useCallback((e) => {
    e.preventDefault();
    setServiceModalOpen(true);
  }, []);

  return (
    <div id="container" style={{ height: '100%' }}>
      <AuthModal authModalOpen={authModalOpen} setAuthModalOpen={setAuthModalOpen} email={email} />
      <ServiceModal serviceModalOpen={serviceModalOpen} setServiceModalOpen={setServiceModalOpen} />
      <SignUpDiv>
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
                <EmailInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                  onChange={onChangeEmail}
                  value={email}
                ></EmailInput>
                <AuthButton onClick={onClickAuthButton}>인증받기</AuthButton>
              </Email>
            </FormGroup>
            <FormGroup>
              <Label>
                비밀번호<span> *</span>
              </Label>
              <br></br>
              <TextInput
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangePassword}
                value={password}
              ></TextInput>
              <SmallText>비밀번호는 8~16자, 영문, 숫자, 특수문자를 포함해야 합니다.</SmallText>
            </FormGroup>
            <FormGroup>
              <Label>
                비밀번호 확인<span> *</span>
              </Label>
              <br></br>
              <TextInput
                type="password"
                id="password-check"
                name="password-check"
                placeholder="비밀번호를 다시 입력해주세요."
                onChange={onChangePasswordCheck}
                value={passwordCheck}
              ></TextInput>
              {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
            </FormGroup>
            <FormGroup>
              <Label>
                이름<span> *</span>
              </Label>
              <br></br>
              <TextInput
                type="text"
                id="name"
                name="name"
                placeholder="이름을 입력해주세요."
                // onChange={onChangeName}
                // value={name}
              ></TextInput>
            </FormGroup>
            <FormGroup>
              <Label>
                휴대폰 번호<span> *</span>
              </Label>
              <br></br>
              <TextInput
                type="text"
                id="phone-number"
                name="phone-number"
                placeholder="-없이 번호를 입력해주세요."
                // onChange={onChangePhoneNumber}
                // value={phoneNumber}
              ></TextInput>
            </FormGroup>
            <FormGroup>
              <Label>
                닉네임<span> *</span>
              </Label>
              <br></br>
              <TextInput
                type="text"
                id="nick-name"
                name="nick-name"
                placeholder="닉네임을 입력해주세요."
                // onChange={onChangeNickName}
                // value={nickName}
              ></TextInput>
            </FormGroup>
            <FormCheck>
              <div>
                <input type="checkbox"></input>
                <CheckText>
                  우도독의 <a onClick={onClickServiceButton}>이용약관 및 개인정보 처리 방침</a>
                  (필수)에 동의합니다.<br></br>
                </CheckText>
                <input type="checkbox"></input>
                <CheckText>
                  <a onClick={onClickServiceButton}>마케팅 정보 수신</a>
                  (선택)에 동의합니다.
                </CheckText>
              </div>
            </FormCheck>
            <SignUpButton>회원가입</SignUpButton>
          </SignForm>
        </SignUpWrapper>
      </SignUpDiv>
      <Footer />
    </div>
  );
};

export default SignUp2;
