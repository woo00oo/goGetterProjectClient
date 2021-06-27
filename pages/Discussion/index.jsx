import React, { useEffect, useState } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import {
  Container,
  DCHeader,
  DCSearch,
  DCTable,
  DCMain,
  DCTitle,
  DCNotice,
  DCContents,
  DCButton,
} from '@pages/Discussion/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Discussion = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get('/api/discussions', {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        setPost(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // console.log({ post });

  return (
    <div id="discussion" style={{ height: '100%' }}>
      <Header></Header>
      <Container>
        <DCHeader>토론 게시판</DCHeader>
        <DCSearch>
          <select>
            <option>제목/내용</option>
            <option>제목</option>
            <option>내용</option>
          </select>
          <i className="fas fa-search"></i>
          <input placeholder="검색어를 입력해주세요."></input>
        </DCSearch>
        <DCTable>
          <DCTitle>
            <tr>
              <th className="textNo">글번호</th>
              <th className="title">제목</th>
              <th>작성자</th>
              <th>작성날짜</th>
            </tr>
          </DCTitle>
          <DCMain>
            {post?.map((item, idx) => {
              return <DCItem key={idx} item={item} />;
            })}
          </DCMain>
        </DCTable>
        <Link to="/discussion/write">
          <DCButton>글쓰기</DCButton>
        </Link>
      </Container>
      <Footer />
    </div>
  );
};

export default Discussion;

const DCItem = ({ item }) => {
  const { id, title, user_nickname, create_at } = item;
  return (
    <tr>
      <td>{id}</td>
      <td className="title">{title}</td>
      <td>{user_nickname}</td>
      <td>{create_at}</td>
    </tr>
  );
};
