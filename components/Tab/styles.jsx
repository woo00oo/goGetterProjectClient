import styled from '@emotion/styled';

export const TabDiv = styled.div`
  width: 250px;
  background-color: #0f4c81;

  & h2 {
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    margin-bottom: 30px;
    margin: 0;
    height: 80px;
    border-bottom: 1px solid #ced4da;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    overflow: auto;
  }

  & li {
    height: 80px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & a {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
  }

  & li:hover {
    background-color: #778fa8;
  }

  & li:last-child {
    border-bottom: 1px solid #ced4da;
  }
`;
