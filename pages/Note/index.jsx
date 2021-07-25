import React, { useState, useRef } from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Container, Content } from '@pages/Note/styles';
import NoteBox from '@components/NoteBox';
import Detail from '@components/NoteBox/Detail';
import { useSelector } from 'react-redux';
import SockJsClient from 'react-stomp';

const Note = () => {
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.auth.user.user_id);
  let topics = ['/topic/' + user];

  const $websocket = useRef(null);
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Header />
        <Content>
          <SockJsClient
            url="/chat"
            ref={$websocket}
            topics={topics}
            onConnect={console.log('connected!')}
            onDisconnect={console.log('disconnected!')}
            onMessage={(msg) => {
              receiveMessage(msg);
            }}
          />
          <NoteBox />
          <Detail />
        </Content>
      </Container>
      <Footer />
    </div>
  );
};

export default Note;
