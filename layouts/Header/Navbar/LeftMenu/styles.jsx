import styled from '@emotion/styled';

export const Left = styled.div`
  width: 600px;
  height: 100%;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  & li {
    margin-left: 10px;
    float: left;
    width: 100px;
  }
  & li a {
    height: 100%;
    display: block;
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
  & li a:hover {
    color: #ced4da;
  }
`;
