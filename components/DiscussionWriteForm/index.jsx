import React, { useState, useCallback } from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button } from '@components/DiscussionWriteForm/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WriteForm = () => {
  const users = useSelector((state) => state.auth.user);
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  const onSubmit = (e) => {
    console.log('LLLLL');
    console.log(users.user_id);
    // e.preventDefault();
    axios
      .post('/api/users/discussions?userId=' + users.user_id, {
        content: content,
        title: title,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <WriteHeader>게시글 작성</WriteHeader>
        <Form>
          <div id="title">
            제목
            <Input id="title" name="title" placeholder="제목을 입력해주세요." onChange={onChangeTitle} value={title} />
          </div>
          <div id="content">
            본문
            <TextArea
              id="content"
              name="content"
              placeholder="내용을 입력해주세요."
              onChange={onChangeContent}
              value={content}
            />
          </div>
          <Button type="submit" onClick={onSubmit}>
            {/* <Link to="/discussion">작성하기</Link> */}
            작성하기
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default WriteForm;
