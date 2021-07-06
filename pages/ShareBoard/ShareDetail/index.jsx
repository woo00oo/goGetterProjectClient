import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title } from '@pages/ShareBoard/ShareDetail/styles';

const ShareDetail = () => {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Title>디테일</Title>
      </Container>
      <Footer />
    </div>
  );
};

export default ShareDetail;
