import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Reply = ({ discussionId }) => {
  const [reply, setReply] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get('/api/bkusers/discussionreplies?discussionId=' + discussionId, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        const page = res.data.pagination.total_elements;
        setCount(page);
        setReply(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Containers>
        <Container>
          <div>
            전체 댓글 <span>{count}</span>
          </div>
          <ReplyDiv>
            {reply?.map((item, idx) => {
              return <ReplyItem key={idx} item={item} />;
            })}
          </ReplyDiv>
          <span>답글 쓰기</span>
          <ReplyWrite>
            <textarea></textarea>
            <button>등록</button>
          </ReplyWrite>
        </Container>
      </Containers>
    </div>
  );
};

export default Reply;

const ReplyItem = ({ item }) => {
  const { id, user_nick_name, content, create_at } = item;
  return (
    <ReplyContents>
      <ReplyUser>
        <i className="fas fa-user-circle"></i>
        <div>
          <div className="nickName">{user_nick_name}</div>
          <div className="date">{create_at}</div>
        </div>
      </ReplyUser>
      <ReplyContent>
        <div className="delete">&times;</div>
        <div>{content}</div>
      </ReplyContent>
    </ReplyContents>
  );
};

const Containers = styled.div`
  margin-top: 100px;
  & span {
    font-weight: bold;
    color: #0f4c81;
  }
`;

const Container = styled.div``;

const ReplyDiv = styled.div`
  margin-bottom: 50px;
`;

const ReplyContents = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  :not(:last-of-type) {
    border-bottom: 1px solid #f7f7f5;
  }
`;
const ReplyUser = styled.div`
  display: flex;
  align-items: center;
  width: 270px;

  & i {
    font-size: 40px;
    margin-right: 10px;
  }
  & div.nickName {
    font-weight: bold;
    font-size: 18px;
  }
  & div.date {
    font-size: 13px;
    color: grey;
  }
`;
const ReplyContent = styled.div`
  width: 100%;
  align-self: center;
  font-size: 16px;
  & div.delete {
    float: right;
    color: red;
    font-size: 20px;
  }
`;
const ReplyWrite = styled.form`
  display: flex;
  align-items: flex-end;
  & div {
  }
  & textarea {
    resize: none;
    border-radius: 3px;
    border: 1px solid #ced4da;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    width: 100%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    height: 74px;
    line-height: 1.33333333;
    font-size: 14px;
    margin-right: 15px;

    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }
  }
  & button {
    border: 0px;
    border-radius: 5px;
    background-color: #0f4c81;
    color: white;
    width: 97px;
    height: 42px;
    font-weight: bold;
    margin-top: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: rgba(15, 76, 129, 0.8);
      border: none;
      cursor: pointer;
    }
    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }

    & > a {
      text-decoration: none;
      color: white;
    }
  }
`;
