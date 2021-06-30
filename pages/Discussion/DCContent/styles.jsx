import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`;

export const DCContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;

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

export const DCEdit = styled.div`
  display: flex;
  justify-content: center;

  & button {
    margin-left: 15px;
    width: 119px;
    height: 42px;
    border-radius: 3px;
    border: 0px;
    background-color: white;
    color: #900020;
    cursor: pointer;
  }

  & button.edit {
    background: #939597;
    :hover {
      background-color: rgba(147, 149, 151, 0.8);
    }
  }

  & button.delete {
    border: 1px solid #900020;
    :hover {
      background-color: rgba(144, 0, 32, 0.8);
    }
  }
`;
