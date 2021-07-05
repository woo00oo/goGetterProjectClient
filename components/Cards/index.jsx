import React from 'react';
import { Container, Title, Content, BookTitle, DateTime, Detail, Tag } from '@components/Cards/styles';
import { Link, Redirect } from 'react-router-dom';
import { Col } from 'antd';
import 'antd/dist/antd.css';

const Cards = (props) => {
  return (
    <Col span={6}>
      <Container>
        {/* <Link to="/shareboard/detail" style={{ textDecoration: 'none', color: '#000', hover: '#000' }}></Link> */}
        <div class="card" style={{ borderRadius: '5px' }}>
          {/* <div class="card-header">My Card</div> */}
          <img
            style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', maxHeight: '250px' }}
            src="images/placeholder.png"
            alt=""
          />
          <div class="card-body" style={{ textAlign: 'right' }}>
            <Title>글 제목</Title>
            <Content>
              <BookTitle>책 제목</BookTitle>
              <DateTime>작성 날짜</DateTime>
              <Tag>태그</Tag>
            </Content>
            <Link to="/shareboard/detail">
              <Detail>자세히</Detail>
            </Link>
          </div>
        </div>
      </Container>
    </Col>
  );
};

export default Cards;
