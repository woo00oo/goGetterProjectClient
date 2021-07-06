import React, { useState, useEffect } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Title } from '@pages/ShareBoard/ShareDetail/styles';
import axios from 'axios';
import { useParams } from 'react-router';

const ShareDetail = (props) => {
  const { boardId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`/api/bkuser/sharings?id=${boardId}`).then((res) => {
      console.log(res);
    });
  }, []);
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
