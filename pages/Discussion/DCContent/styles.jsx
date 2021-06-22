import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`;

export const DCContainer = styled.div``;

export const SubHeader = styled.h2`
  padding: 50px 30px;
`;

export const MainContainer = styled.div`
  height: 500px;
`;

export const SubTitle = styled.div`
  font-size: 24px;
  padding: 20px 20px;
  font-weight: bold;
`;

export const SubMeta = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #939597;
`;

export const SubMetaLeft = styled.div`
  font-size: 15px;
  padding: 10px;
  color: #939597;
  & span.comment {
    color: #0f4c81;
  }

  & span.divide::after {
    padding: 10px;
    content: '|';
  }
`;

export const SubMetaRight = styled.div`
  font-size: 18px;
  margin-bottom: 20px;

  & i {
    font-size: 35px;
    padding: 0px 30px 0 10px;
  }
`;

export const SubArticle = styled.article`
  padding: 30px;
  font-size: 18px;
  line-height: 30px;
`;
