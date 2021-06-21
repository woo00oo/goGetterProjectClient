import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { DiscussionDiv, Container, DCHeader } from '@pages/Discussion/styles';

const Discussion = () => {
  return (
    <div id="discussion" style={{ height: '100%' }}>
      <DiscussionDiv>
        <Header />
        <Container>
          <DCHeader>토론 게시판</DCHeader>
        </Container>
      </DiscussionDiv>
      <Footer />
    </div>
  );
};

export default Discussion;
