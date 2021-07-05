import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title, Content, PopularCards, SharedCards } from '@pages/ShareBoard/styles';
import Cards from '@components/Cards';
import CardsPopular from '@components/CardsPopular';
import { Row } from 'antd';

const ShareBoard = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>공유 게시판</Title>
        <Content>
          <h4>인기 게시물</h4>
          {/* 인기 게시물 grid */}
          <PopularCards>
            <Row gutter={[64, 8]}>
              <CardsPopular />
              <CardsPopular />
              <CardsPopular />
            </Row>
          </PopularCards>
          <h4>공유된 게시물</h4>
          <SharedCards>
            <Row gutter={[16, 32]}>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Row>
          </SharedCards>
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default ShareBoard;
