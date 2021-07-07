import React from 'react';
import {
  Content,
  ContentLeft,
  ContentImg,
  ContentRight,
  ContentTitle,
  ContentText,
  ContentEdit,
} from '@components/ShareDetailContent/styles';

const ShareDetailContent = (props) => {
  return (
    <div>
      <Content>
        <ContentLeft>
          <ContentImg>
            <img src="/images/placeholder.png"></img>
          </ContentImg>
          <div className="title">{props.bookTitle}</div>
        </ContentLeft>
        <ContentRight>
          <ContentTitle>
            <div className="title">{props.title}</div>
            <div className="date">2021-06-25 14:34</div>
          </ContentTitle>
          <ContentText>
            {props.content}
            <div id="tag">{props.tag ? props.tag : null}</div>
          </ContentText>
          <ContentEdit>
            <button className="edit">수정하기</button>
            <button className="delete">삭제하기</button>
          </ContentEdit>
        </ContentRight>
      </Content>
    </div>
  );
};

export default ShareDetailContent;
