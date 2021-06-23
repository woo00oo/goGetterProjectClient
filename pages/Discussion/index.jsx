import React from 'react';
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

const Discussion = () => {
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
          <i class="fas fa-search"></i>
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
            <tr className="notice">
              <td>공지</td>
              <td className="title">토론 게시판 이용규칙</td>
              <td>우도독</td>
              <td>20-06-21</td>
            </tr>
            <tr>
              <td>1</td>
              <td className="title">나의 라임 오렌지나무</td>
              <td>나독자</td>
              <td>20-06-21</td>
            </tr>
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
