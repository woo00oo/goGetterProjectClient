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

const Discussion = () => {
  return (
    <>
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
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성날짜</th>
            </tr>
          </DCTitle>
          <DCMain>
            <tr>
              <td>1</td>
              <td>나의 라임 오렌지나무</td>
              <td>나독자</td>
              <td>20-06-21</td>
            </tr>
          </DCMain>
        </DCTable>
        <DCButton>글쓰기</DCButton>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Discussion;
