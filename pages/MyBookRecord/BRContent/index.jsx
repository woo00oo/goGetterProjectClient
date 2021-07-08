import React, { useEffect, useState } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, BRContainer, MyHeader } from '@pages/MyBookRecord/BRContent/styles';
import RecordDetailContent from '@components/RecordDetailContent';
import { useParams } from 'react-router';
import axios from 'axios';

const BRContent = () => {
  const { boardId } = useParams();
  // useEffect(() => {
  //   axios.get();
  // }, []);

  return (
    <div style={{ height: '100%' }}>
      <BRContainer>
        <Header />
        <Container>
          <MyHeader>나의 게시물</MyHeader>
          <RecordDetailContent />
        </Container>
      </BRContainer>
      <Footer />
    </div>
  );
};

export default BRContent;
