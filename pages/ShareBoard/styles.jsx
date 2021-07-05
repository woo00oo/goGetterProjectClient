import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 300px;
`;

export const Title = styled.h2`
  padding: 50px 30px;
  border-bottom: 1px solid #939597;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

export const PopularCards = styled.div`
  padding: 0px 30px;
  margin-bottom: 30px;
  margin-left: 30px;
`;

export const SharedCards = styled.div`
  padding: 0px 30px;
  margin-bottom: 30px;
`;
