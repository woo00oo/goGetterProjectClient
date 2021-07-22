import React from 'react';
import { Container, Top } from '@components/NoteBox/Detail/styles';
import ChatBox from '@components/NoteBox/Detail/ChatBox';
import ChatList from '@components/NoteBox/Detail/ChatList';

const Detail = () => {
  return (
    <div>
      <Container>
        <Top>
          <h4>닉네임</h4>
        </Top>
        <ChatList />
        <ChatBox />
      </Container>
    </div>
  );
};

export default Detail;
