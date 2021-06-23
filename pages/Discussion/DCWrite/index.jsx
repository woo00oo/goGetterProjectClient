import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import WriteForm from '@components/WriteForm';
import { Container, DCContainer } from '@pages/Discussion/DCWrite/styles';

const DCWrite = () => {
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header />
        <Container>
          <WriteForm></WriteForm>
        </Container>
      </DCContainer>
      <Footer />
    </div>
  );
};

export default DCWrite;
