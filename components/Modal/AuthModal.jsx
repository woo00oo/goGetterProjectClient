import React from 'react';
import styled from 'styled-components';

const authModal = ({ authModalOpen, setAuthModalOpen }) => {
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

export default authModal;

const Modal = styled.div`
  display: ${(props) => (props.signUpModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBtn = styled.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 225px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainText = styled.div`
  font-size: 18px;
`;

const SubText = styled.div`
  font-size: 12px;
  color: #c4c4c4;
`;

const Container = styled.div`
  width: 420px;
  height: 190px;
  background-color: white;
  display: ${(props) => (props.signUpModal ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
