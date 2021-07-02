import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title } from '@pages/ShareBoard/styles';

const ShareBoard = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>공유 게시판</Title>
      </Container>
      <Footer />
    </div>
  );
};

export default ShareBoard;
