import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import {
  Container,
  DCContainer,
  SubHeader,
  MainContainer,
  SubTitle,
  SubMeta,
  SubMetaLeft,
  SubMetaRight,
} from '@pages/Discussion/DCContent/styles';

const DCContent = () => {
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header></Header>
        <Container>
          <SubHeader>토론 게시판</SubHeader>
          <MainContainer>
            <SubTitle>베니스의 상인</SubTitle>
            <SubMeta>
              <SubMetaLeft>
                <span>2021-06-22</span>
                <span>조회수 10</span>
                <span>댓글 3</span>
              </SubMetaLeft>
              <SubMetaRight>
                <i></i>
                <span>안토니오</span>
              </SubMetaRight>
            </SubMeta>
          </MainContainer>
        </Container>
      </DCContainer>
      <Footer></Footer>
    </div>
  );
};

export default DCContent;
