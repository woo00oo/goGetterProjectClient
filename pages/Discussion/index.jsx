import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, DCHeader } from '@pages/Discussion/styles';

const Discussion = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <DCHeader>토론 게시판</DCHeader>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Discussion;
