import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Containers,
  Container,
  ReplyDiv,
  ReplyContents,
  ReplyUser,
  ReplyContent,
  ReplyWrite,
} from '@components/Reply/styles';

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
