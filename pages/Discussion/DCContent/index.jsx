import React, { useState, useEffect } from 'react';
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
  SubArticle,
  DCEdit,
} from '@pages/Discussion/DCContent/styles';
import axios from 'axios';

const DCContent = ({ match }) => {
  const { id } = match.params;
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [nickName, setNickName] = useState();
  const [date, setDate] = useState();
  // const [id, setId] = useState();
  useEffect(() => {
    axios
      .get('/api/bkuser/discussions?id=' + id)
      .then((res) => {
        const data = res.data.data;
        setTitle(data.title);
        setContent(data.content);
        setNickName(data.user_nickname);
        setDate(data.create_at);
        setId(data.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div style={{ height: '100%' }}>
      <DCContainer>
        <Header></Header>
        <Container>
          <SubHeader>토론 게시판</SubHeader>
          <MainContainer>
            <SubTitle>{title}</SubTitle>
            <SubMeta>
              <SubMetaLeft>
                <span className="divide">{date}</span>
                <span className="divide">조회수 10</span>
                <span>
                  댓글<span className="comment">3</span>
                </span>
              </SubMetaLeft>
              <SubMetaRight>
                <span>{nickName}</span>
                <i class="fas fa-user-circle"></i>
              </SubMetaRight>
            </SubMeta>
            <SubArticle>{content}</SubArticle>
          </MainContainer>
          <DCEdit>
            <button className="edit">수정하기</button>
            <button className="delete">삭제하기</button>
          </DCEdit>
        </Container>
      </DCContainer>
      <Footer></Footer>
    </div>
  );
};

export default DCContent;
