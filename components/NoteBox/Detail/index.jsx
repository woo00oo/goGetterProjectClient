import React, { useCallback, useRef, useState } from 'react';
import { Container, Top } from '@components/NoteBox/Detail/styles';
import ChatBox from '@components/NoteBox/Detail/ChatBox';
import ChatList from '@components/NoteBox/Detail/ChatList';
import useInput from '@hooks/useInput';
// import { useSelector } from 'react-redux';
// import SockJsClient from 'react-stomp';

const Detail = () => {
  const [chat, onChangeChat, setChat] = useInput('');

  // const [messages, setMessages] = useState([]);
  // const user = useSelector((state) => state.auth.user.user_id);
  // let topics = ['/topic/' + user];

  // const $websocket = useRef(null);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(chat);
      // 통신
    },
    [chat],
  );

  const receiveMessage = (msg) => {};

  return (
    <div>
      <Container>
        <Top>
          <h4>닉네임</h4>
        </Top>
        {/* <SockJsClient
          url="/chat"
          ref={$websocket}
          topics={topics}
          onConnect={console.log('connected!')}
          onDisconnect={console.log('disconnected!')}
          onMessage={(msg) => {
            receiveMessage(msg);
          }}
        /> */}
        <ChatList />
        <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      </Container>
    </div>
  );
};

export default Detail;
