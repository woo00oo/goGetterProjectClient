import styled from '@emotion/styled';

export const TabDiv = styled.div`
  margin-top: 70px;
  width: 200px;
  background-color: #fffff;

  & h2 {
    padding: 50px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    margin-bottom: 20px;
    margin: 0;
    height: 50px;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    overflow: auto;
  }

  & li {
    height: 50px;
    width: 200px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    margin-top: 20px;
  }

  & a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
  }

  & li:hover {
    background-color: #778fa8;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
  }

  & li:last-child {
  }
`;
