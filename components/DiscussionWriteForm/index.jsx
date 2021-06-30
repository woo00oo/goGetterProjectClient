import React, { useState, useCallback } from 'react';
import { Container, Form, WriteHeader, Input, TextArea, Button } from '@components/DiscussionWriteForm/styles';
import useInput from '@hooks/useInput';
import axios from 'axios';
const WriteForm = () => {
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post('/api/user/discussions', {
          title,
          content,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    [title, content],
  );

  return (
    <div>
      <Container>
        <WriteHeader>게시글 작성</WriteHeader>
        <Form onSubmit={onSubmit}>
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
          <Button type="submit">작성하기</Button>
        </Form>
      </Container>
    </div>
  );
};

export default WriteForm;
