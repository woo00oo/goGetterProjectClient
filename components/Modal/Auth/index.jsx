import React from 'react';
import { Modal, ModalBtn, ModalWrapper, MainText, SubText, Container } from '@components/Modal/Auth/styles';

const Auth = ({ authModalOpen, setAuthModalOpen }) => {
  return (
    <>
      <Modal
        signUpModal={authModalOpen}
        onClick={() => {
          setAuthModalOpen(false);
        }}
      />
      <Container signUpModal={authModalOpen}>
        <ModalWrapper>
          <MainText>입력하신 이메일로 인증을 완료해 주세요.</MainText>
          <SubText>*수신함에서 인증메일을 찾을 수 없을 경우 스팸함을 조회하세요.</SubText>
          <ModalBtn
            onClick={() => {
              setAuthModalOpen(false);
            }}
          >
            인증 메일 발송
          </ModalBtn>
        </ModalWrapper>
      </Container>
    </>
  );
};

export default Auth;
