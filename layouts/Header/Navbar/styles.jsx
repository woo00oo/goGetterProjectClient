import styled from '@emotion/styled';

export const Fixed = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  float: right;

  & ul {
    display: flex;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    align-items: center;
    justify-content: center;
  }

  & ul > li {
    display: inline;
    margin-left: 15px;
  }

  & ul > li > a {
    text-decoration: none;
    text-align: center;
    color: #939597;
    font-weight: bold;
  }

  & ul > li > a:hover {
    color: rgba(147, 149, 151, 0.8);
  }
`;
