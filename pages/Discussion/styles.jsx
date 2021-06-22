import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  height: 100vh - 180px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`;
export const DCHeader = styled.h2`
  padding: 50px 30px;
`;

export const DCSearch = styled.div`
  display: flex;
  justify-content: flex-end;

  & i {
    position: absolute;
    font-size: 16px;
    color: #0f4c81;
    top: 160px;
    right: 5px;
    z-index: 2;
    cursor: pointer;
  }

  & select {
    border-color: #0f4c81;
    color: #0f4c81;
    border-radius: 3px;
    margin-right: 10px;
  }

  & input {
    width: 298px;
    height: 34px;
    border: 1px solid #939597;
    border-radius: 3px;
  }
`;

export const DCTable = styled.table`
  border-top: 1px solid #0f4c81;
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
`;

export const DCTitle = styled.thead`
  border: 0px;
  border-bottom: 1px solid #0f4c81;
  & th {
    border: 0px;
    padding: 5px;
    height: 60px;
    font-size: 15px;
    color: #0f4c81;
  }
`;

export const DCMain = styled.tbody`
  text-align: center;
  height: 60px;
  & td {
    border-bottom: 1px solid #939597;
  }

  :hover {
    background-color: aliceblue;
  }
`;

export const DCButton = styled.button`
  border: 0px;
  border-radius: 15px;
  background-color: #0f4c81;
  color: white;
  width: 80px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
`;
